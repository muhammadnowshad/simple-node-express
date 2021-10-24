const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get("/", (req, res) =>{
    res.send('Hello i am learn some thing')
});

const users =[
    { id: 0, name: 'Shabana', email: 'shabana@gmail.com', phone: '01788888888'},
    { id: 1, name: 'Shabnur', email: 'Shabnur@gmail.com', phone: '01788888888'},
    { id: 2, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01788888888'},
    { id: 3, name: 'Sonya', email: 'Sonya@gmail.com', phone: '01788888888'},
    { id: 4, name: 'Sirabonti', email: 'Sirabonti@gmail.com', phone: '01788888888'},
    { id: 5, name: 'Shongkhomala', email: 'Shongkhomala@gmail.com', phone: '01788888888'},
]

app.get("/users", (req, res) => {
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult)
    }
    else{
        res.send(users)
    }
})

//app.Method
app.post('/users', (req, res) => {
    console.log(req.body);
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);

    res.json(newUser);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana'])
})
app.get('/fruits/mongoes/fazli', (req, res) => {
    res.send('Yammy Yammy tok marka fazli mango');
})

app.listen(port, () => {
    console.log('listening to part', port);
});