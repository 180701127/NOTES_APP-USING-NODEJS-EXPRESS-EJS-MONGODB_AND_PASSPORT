/**
 * Get /
 * Homepage
 */

exports.Homepage = async(req,res)=>{
    const locals = {
        title: "NodeJS Notes",
        description: "Free NodeJS Notes App",
    }

    res.render('index', {
        locals,
        layout: '../views/layouts/front-page'
    });
}

/**
 * Get /
 * About
 */

exports.about = async(req,res)=>{
    const locals = {
        title: "About - NodeJS Notes",
        description: "Free NodeJS Notes App",
    }

    res.render('about', locals);
}