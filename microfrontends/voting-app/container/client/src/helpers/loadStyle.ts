export const loadStyle = (url: string) => {
  new Promise((resolve, reject) => {
    let link = document.createElement("link");
    link.onerror = event => reject(new Error(`Failed to load '${url}'`));
    link.onload = resolve;
    link.href = url;
    link.rel = "stylesheet";
    (document.head || document.getElementsByTagName("head")[0]).appendChild(
      link,
    );
  });
};
