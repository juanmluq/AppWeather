import React from 'react';
import './Cards.css';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  return (
    <div className='cards'>
      {cities.map (c => <Card
        id={c.id}
        /* este id lo puse yo para 
        que Card reciba el mismo id */
          key={c.id}
          max={c.max}
          min={c.min}
          name={c.name}
          img={c.img}
          onClose= {() => onClose(c.id)} 
          /> )}
    </div>
  );
}

// import React from 'react';
// import style from './Cards.css';

// import Card from './Card.jsx';

// export default function Cards({cities}) {
//   return (
//     <div className={style.cards}>
//       {cities.map (c => (<Card
//         id={c.id}
//         /* este id lo puse yo para 
//         que Card reciba el mismo id */
//           key={c.id}
//           max={c.max}
//           min={c.min}
//           name={c.name}
//           img={c.weather[0].icon}
//           onClose= {() => alert(c.name)} 
//           /> 
//           ))}
//     </div>
//   );
// }
