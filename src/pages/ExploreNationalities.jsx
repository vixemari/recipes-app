import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import IndexFooter from '../components/footer/IndexFooter';
import CardsByArea from '../components/CardsByArea';

function ExploreNationalities() {
  const EXPLORE_NATIONALITIES = 'Explore Nationalities';
  const [byArea, setByArea] = useState([]);
  const [nameArea, setNameArea] = useState([]);
  const [foodArea, setFoodArea] = useState([]);

  const fetchApi = async () => {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
    const data = await response.json();
    setByArea(data.meals);
  };

  const fetchApiCards = async () => {
    if (nameArea === 'All') {
      const responseName = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      setFoodArea(responseName.meals);
    } else {
      const resultName = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?a=');
      setFoodArea(resultName.meals);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  useEffect(() => {
    fetchApiCards();
  });

  return (
    <div>
      <Header title={ EXPLORE_NATIONALITIES } btnSearch />
      <select
        data-testid="explore-by-nationality-dropdown"
        onChange={ (e) => setNameArea(e.target.value) }
      >
        <option
          data-testid="All-option"
        >
          All
        </option>
        { byArea.map(({ strArea }, index) => (
          <option
            data-testid={ `${strArea}-option` }
            key={ index }
          >
            {strArea}
          </option>
        ))}
      </select>
      <CardsByArea foodArea={ foodArea } />
      <IndexFooter />
    </div>
  );
}

export default ExploreNationalities;
