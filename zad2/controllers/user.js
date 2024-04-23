const User = require('../models/User');

exports.getSetUserSession = (request, response) => {
    const users = User.getAll();
    response.render("set-user-session", { title: "Set User Session", users });
};

exports.setUserSession = (request, response) => {
    request.session.userId = request.body.userId;
    response.redirect("/books");
};
