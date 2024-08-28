$(document).ready(() => {
    render_projects('featured');
})


let render_projects = (slug) => {
    let projects_area = $('.projects-wrapper');

    $('.white-button').removeClass('white-button-hover');
    $(`#${slug}`).addClass('white-button-hover');

    let projects_obj = [
        {
            image: 'assets/images/GSA-1.jpg',
            link: 'https://github.com/wbyoon2002',
            title: '1st Year R&E',
            demo: 'https://wbyoon2002.github.io/portfolio/',
            technologies: ['Physics', 'Math'],
            description: "An analysis of the error rate in measuring the moment of inertia of a baseball bat by locating its center of percussion.",
            categories: ['featured', 'High School']
        },
        {
            image: 'assets/images/GSA-2.png',
            link: 'https://github.com/wbyoon2002',
            title: '2nd Year R&E',
            demo: 'https://wbyoon2002.github.io/portfolio/',
            technologies: ['Physics', 'Math', 'Environment'],
            description: "A simple device that measures fine dust within exhaust gas using the principles of SMPS and CPC.",
            categories: ['featured', 'GSA']
        },
        {
            image: 'assets/images/GSA-3.jpg',
            link: 'https://github.com/wbyoon2002',
            title: '3rd Grade R&E',
            demo: 'https://wbyoon2002.github.io/portfolio/',
            technologies: ['Physics', 'Math'],
            description: "A study on measuring the angular displacement using electromagnetic induction.",
            categories: ['featured', 'GSA']
        },
        {
            image: 'assets/images/KAIST.jpg',
            link: 'https://github.com/wbyoon2002',
            title: 'Fabric-based wearable piezoelectric energy harvester',
            demo: 'https://wbyoon2002.github.io/portfolio/',
            technologies: ['Physics', 'Math', 'Chemistry'],
            description: "A study on piezoelectric energy by analyzing piezoelectric material made from a P(VDF-TrFE) film.",
            categories: ['featured', 'Extracurricular']
        },
        {
            image: 'assets/images/GSA-4.jpg',
            link: 'https://github.com/wbyoon2002',
            title: 'Hand movement recognition device',
            demo: 'https://wbyoon2002.github.io/portfolio/',
            technologies: ['Physics', 'Math'],
            description: "A hand movement recognition device, which works by measuring the electromotive force of a loop of coil within a Helmholtz coil.",
            categories: ['featured', 'Extracurricular']
        },
    ]

    let projects = [];
    if(slug == 'all') {
        projects = projects_obj.map(project_mapper);
    } 
    else {
        projects = projects_obj.filter(project => project.categories.includes(slug)).map(project_mapper);
    }
    projects_area.hide().html(projects).fadeIn();
}

let project_mapper = project => {
    return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${project.image ? 
                    `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`           
                : ''}

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${project.description} ${project.demo ? `<a href="${project.demo}">Demo</a>` : ''}</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies.map(tech =>
                            `<span class="project-technology paragraph-text-normal">${tech}</span>`
                        ).join('')}
                    </div>

                </div>
            </div>
        </div>
    `
}

let selected = (slug) => {
    render_projects(slug);
}