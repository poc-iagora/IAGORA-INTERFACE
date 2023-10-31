import React, { useState } from "react";
import "../iagora.css";
import Table from "components/Table/Table.js";
import DemoNavbar from "components/Navbars/DemoNavbar";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export function ListProject() {
 const [value, setValue] = useState('Education');
 const top100Films = [
    { title: 'Education', year: 1994 },
    { title: 'Finance', year: 1972 },
    { title: 'Santé', year: 1974 },
    { title: 'Blockchain', year: 2008 },
    { title: 'Internet of Thing', year: 1957 },
    { title: "Automobile", year: 1993 },
 ];

 const projets = [
    {
      title: "Projet 1",
      category: "Education",
    },
    {
      title: "Projet 2",
      category: "Curaçao",
    },
    {
      title: "Projet 3",
      category: "Blockchain",
    },
    {
      title: "Projet 4",
      category: "Korea, South",
    },
    {
      title: "Projet 5",
      category: "Malawi",
    },
    {
      title: "Projet 6",
      category: "Chile",
    },
 ];

 const options = top100Films.map((option) => {
    const firstLetter = option.title[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
 });

 function filterData(data, category) {
    return data.filter((item) => item.category === category);
 }

 const filteredProjets = filterData(projets, value.title);

 return (
    <div>
      <DemoNavbar />
      <div className="container d-flex justify-content-around">
        <div style={{ minWidth: "600px" }}>
          <p>Liste de projets</p>
        </div>
      </div>

      <Autocomplete
        id="grouped-demo"
        options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.title}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Catégorie" onChange={(e) => setValue(e.target.value)} />}
      />

      <div>
        <Table
          tableHeaderColor="primary"
          tableHead={['Nom', 'Représentant', 'Description', 'Catégorie', 'Ressources humaines requises', 'Ressources matérielles requises', 'Budget estimé']}
          tableData={filteredProjets.map(projet => projet.category)}
        />
      </div>
    </div>
 );
}