import Entry from './Entry'

const PersonsOfInterest = ({personsOfInterest}) => {
    return (
        <>
        {personsOfInterest.map(
            poi => <Entry key={poi.name} person={poi} />
        )}
        </>
    )
}

export default PersonsOfInterest