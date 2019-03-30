var express = require('express');
var router = express.Router();

const mockDataSource = [
    {id: '1', shortDesc: 'A todo', message: 'Test message from Todo 1'},
    {id: '2', shortDesc: 'Another todo', message: 'Test message from Todo 2'}
];

/* GET users listing. */
router.get('/', function(req, res) {
  res.send(mockDataSource);
});

router.get('/:id', function(req, res) {
    const todo = mockDataSource.find((el) => el.id = req.params.id);
    console.log(mockDataSource);
    console.log(todo);
    console.log(req.params.id);
    if(todo) {
        res.send(todo);
    } else {
        res.sendStatus(404);
    }

});

module.exports = router;
