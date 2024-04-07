import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import BasicModal from '../Components/Modal';

const People = ({data}) => {
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState();
  const [homeworldItem, setHomeworldItem] = React.useState();
  const handleOpen = () => setOpen(true);
  
  React.useEffect(() => {
    if(item){
      fetch(`${item?.homeworld}`).then((response) => {
        if(response.ok){
            return response.json();
        }
        throw response;
      }).then(data => {
          setHomeworldItem(data)
      }).catch((error) => {
          console.log(error.message)
      })
    }

  }, [item])
  return (
    <>
    <Grid container item xs={12} sm={9} sx={{margin:"40px auto"}} display="flex" direction="row" justifyContent="flex-start" alignItems="flex-start" flexWrap="wrap">
      {
      data?.map((people, index)=>(
        <Card sx={{ width: 345, m:1 ,
          ':hover': {
            boxShadow: 20, // theme.shadows[20]
            }}}
            key={index}
        >
          {open? 
            <BasicModal
                open={open}
                setOpen={setOpen}
                people={item}
                homeWorld={homeworldItem}
            />: 
            ""
          }
        <CardMedia
          sx={{ height: 140, objectFit:"cover" }}
          image={`https://picsum.photos/200/300?random=?${Math.floor(Math.random() * 50) + 1}`}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {people.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => {handleOpen(); setItem(people);}}>Learn More</Button>
        </CardActions>
      </Card>
      ))
      }
    </Grid>

    </>
  )
}

export default People
