import React from 'react';

import './card.css';

//we destructure props.children here in the function component arguments
export const Card = ({ children }) => <div className='card'>{children}</div>