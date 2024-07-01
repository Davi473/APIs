let view = new View();
let server = new Web("http://localhost:3005");
let model = new Model(server);
new Controllers(view, model).init();