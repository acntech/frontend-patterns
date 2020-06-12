const _cache = new Map<string, any>();

export const loadScript = (url: string, name: string) => {
  let promise;

  if (!_cache.has(url)) {
    promise = new Promise((resolve, reject) => {
      let script = document.createElement("script");
      script.onerror = () => reject(new Error(`Failed to load '${url}'`));
      script.onload = resolve;
      script.async = true;
      script.src = url;

      if (document.currentScript) {
        document.currentScript.parentNode.insertBefore(
          script,
          document.currentScript,
        );
      } else {
        (document.head || document.getElementsByTagName("head")[0]).appendChild(
          script,
        );
      }
    });

    _cache.set(url, promise);
  } else {
    promise = _cache.get(url);
  }

  return promise.then(() => {
    if ((global as any)[name]) {
      return (global as any)[name];
    } else {
      throw new Error(`"${name}" was not created by "${url}"`);
    }
  });
};
