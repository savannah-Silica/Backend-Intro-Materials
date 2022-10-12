
module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
        name: {
         type: Sequelize.STRING,
         required:true
        },
        email: {
        type: Sequelize.STRING,
        required:true
        },
        password: {
            type: Sequelize.STRING,
        }
        
    })
    return User;
}