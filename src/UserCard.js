import Card from 'react-bootstrap/Card';

const UserCard = ({
name,
username,
email,
address: {
  street,
  suite,
  city,
  zipcode,
  geo {
    lat,
    lng
  }
},
phone,
website,
company {
  name,
  catchPhrase,
  bs
}
}}) => {
  return (
    
      <Card.Body>
        <Card.Title>{name} </Card.Title>
        <Card.Text>
        username:{username}<br/>
email:{email}<br/>
address: {address}{
  street:{street}<br/>
  suite:{suite}<br/>
  city:{city}<br/>
  zipcode:{zipcode}<br/>
  geo:{geo} {
    lat:{lat}<br/>
    lng:{ing}
  }
},
phone:{phone}<br/>
website:{website}<br/>
company:{company} {
  name:{name}<br/>
  catchPhrase:{catchPhrase}<br/>
  bs:{bs}
}
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default UsreCard;