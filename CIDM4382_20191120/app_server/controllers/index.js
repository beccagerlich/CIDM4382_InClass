const welcome = (req,res,next)=>{
    res.render('index', { title: 'Express' });
};

module.exports = {
    welcome,
}

// rendering the index pug templates
// function(req, res, next) {
//     res.render('index', { title: 'Express' });
//   });