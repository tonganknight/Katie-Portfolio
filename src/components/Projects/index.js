import React from 'react';

function Projects() {

    return(
       
    <div className="portfolioflex">
         <div className="projecttext">Over the past year I have built responsive applications with various technologies. Here is some of projects I have built.
           I have broken these up into two sections to make browsing more convenient. 
           I have also included links to the Git Hub repositories in case you want to check out how I made these. 
           </div>
        
        <div className="projectview1">
        
        <div className=" leftoverstitle projecttitle">Leftovers</div>

        <a className ="repolink" target="blank" href="https://github.com/tonganknight/awesome-sauce">You can find the Git repo for leftovers here </a>

        <a className="projectwindow1 windoweffect" target="blank" href="https://tonganknight.github.io/awesome-sauce/"></a>

        <div className="projecttitle">Taskmaster Pro</div>

        <a className ="repolink" target="blank" href="https://github.com/tonganknight/taskmaster-pro">You can find the Git repo for Taskmaster here </a>

        <a className="projectwindow2 windoweffect" target="blank" href="https://tonganknight.github.io/taskmaster-pro/"></a>
       
        <div className="projecttitle">Work Scheduler</div>

        <a className ="repolink" target="blank" href="https://github.com/tonganknight/taskmaster-pro">You can find the repo for Work Scheduler here </a>

        <a className=" windoweffect projectwindow3" target="blank" href="https://tonganknight.github.io/Work-Scheduler/"></a>
        
        <div className="projecttitle">Run Buddy</div>

        <a className ="repolink" target="blank" href="https://github.com/tonganknight/run-buddy">You can find the repo for Run Buddy here </a>
          
        <a className="windoweffect projectwindow4" target="blank" href="https://tonganknight.github.io/run-buddy/"></a>
        
        </div>


           
    </div>

    )

}


export default Projects