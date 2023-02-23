import Grid from "@material-ui/core/Grid";
import { CircularProgress } from '@material-ui/core';


const Skeleton = (): React.ReactElement => {
  return (
    <Grid container justify="center">
      <Grid item xs={12} sm={10} style={{textAlign: "center"}}>
        <CircularProgress size={50} style={{color: "red"}}/>
      </Grid>
    </Grid>
  );
};

export default Skeleton;
