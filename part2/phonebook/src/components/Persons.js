import Person from './Person.js'

const Persons = ({ persons, allPersons }) => {
  if (persons.length === 0) {
    return (
      <ul>
        {allPersons.map((person, i) =>
          <Person key={i} person={person} />
        )}
      </ul>
    )
  } else {
    return (
      <ul>
        {persons.map((person, i) =>
          <Person key={i} person={person} />
        )}
      </ul>
    )
  }
}

export default Persons;