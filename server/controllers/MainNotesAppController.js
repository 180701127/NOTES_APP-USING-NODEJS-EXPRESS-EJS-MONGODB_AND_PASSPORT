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

exports.Features = async(req,res)=>{
    const locals_1 = {
        title: "Features - NodeJS Notes",
        description: "Free NodeJS Notes App",
    }

    res.render('features', locals_1);
}

exports.Faq = async(req,res)=>{
    const locals_2 = {
        title: "Faq - NodeJS Notes",
        description: "Free NodeJS Notes App",
    }

    res.render('faq', locals_2);
}

