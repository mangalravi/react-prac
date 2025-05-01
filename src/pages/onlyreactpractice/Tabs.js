import React, { useState } from 'react';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ['Tab1', 'Tab2', 'Tab3'];
  
  const content = [
    (
      <>
        <h2>Heading for Tab 1</h2>
        <p>This is the first tab. Here we can add some additional content like paragraphs to describe more information about Tab 1.</p>
        <p>Here's more detailed content for Tab 1. You can include more paragraphs, lists, or any other HTML elements.</p>
      </>
    ),
    (
      <>
        <h2>Heading for Tab 2</h2>
        <p>This is the second tab. It contains more information about Tab 2.</p>
        <p>Content for Tab 2 can be as extensive as necessary. It can include headings, paragraphs, and even images.</p>
      </>
    ),
    (
      <>
        <h2>Heading for Tab 3</h2>
        <p>This is the third tab. Feel free to add more content here with appropriate HTML elements.</p>
        <p>For example, you could have sections, lists, or any rich content you want to display inside each tab.</p>
      </>
    ),
  ];

  return (
    <>
      <ul style={{ listStyleType: 'none', display: 'flex', cursor: 'pointer' }}>
        {tabs.map((item, index) => (
          <li
            key={index}
            onClick={() => setActiveTab(index)}
            style={{
              padding: '10px 20px',
              marginRight: '10px',
              backgroundColor: activeTab === index ? '#007BFF' : '#f0f0f0',
              color: activeTab === index ? '#fff' : '#000',
              borderRadius: '5px',
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
        {content[activeTab]}
      </div>
    </>
  );
};

export default Tabs;
