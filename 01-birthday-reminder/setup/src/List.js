import React from 'react';

const List = ({people}) => {
  return (
    <>
    {
      people.map((person)=>{
      return <article key = {person.id} className="person">
        <div className = 'person'>
        <img src={person.image} alt={person.name}></img>
        <div>
        <h4>{person.name}</h4>
        <p>{person.age} Years</p>
        </div>
        
      </div>
      </article>
      
      }
        
      )
    }
    </>
  );
};

export default List;
