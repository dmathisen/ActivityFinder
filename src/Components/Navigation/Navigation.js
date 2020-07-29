import React from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  // modify this list to populate activities menu
  const activities = [
    { id: 1, slug: 'recreational', desc: 'Recreational' },
    { id: 2, slug: 'cooking', desc: 'Cooking' }
  ];

  // handle accordion
  const toggleAccordionItem = e => {
    const accordionContent = e.target.parentNode.querySelector('.accordion-content');
    accordionContent.style.display = (accordionContent.style.display === 'block') ? 'none' : 'block';
  }

  return (
    <nav>
      <div className="accordion">

        <div className="accordion-item">
          <h2 onClick={toggleAccordionItem}>Activities</h2>
          
          <div className="accordion-content" style={{ display: 'block' }}>
            {
              activities.map(({id, slug, desc}) => {
                return <Link to={`/activity/${slug}`} key={id}>{desc}</Link>;
              })
            }
          </div>
        </div>

        <div className="accordion-item">
          <h2 onClick={toggleAccordionItem}>Account</h2>

          <div className="accordion-content">
            <Link to="/profile">Profile</Link>
            <Link to="/settings">Settings</Link>
          </div>
        </div>

      </div>{/* .accordion */}
    </nav>
  );
}