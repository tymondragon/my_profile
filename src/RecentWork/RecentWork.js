import React from 'react';
import Memory from '../assets/memory.png';

const RecentWork = () => {
  const projects = {
    memory: {
      name: "Let's Play Memory!",
      description: "The classic card game memory to demonstrate functional logic and DOM manipulation.",
      technologies: "JavaScript, jQuery, CSS, HTML, Materialize",
      link: "http://letsplaymemory.surge.sh",
      image: Memory
    }
  }
  
  return (
    <div className="page recent-work ">
      <br></br>
      <p>
        Recent Work
      <a href={projects.memory.link} target="_blank" rel="noopener noreferrer">Let's Play Memory!</a>
        <img src={projects.memory.image} alt="Let's Play Memory"/>
      • FootNotes<br></br>
      • FakerFact<br></br>
      • SplattAR<br></br>
      </p>
    </div>
  )
}

export default RecentWork