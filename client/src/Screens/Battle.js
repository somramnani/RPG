import React, { Component } from "react";
import { Grid, Container, Box } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import MonsterCard from "../Components/MonsterCard";
import Button from "@material-ui/core/Button";
import players from "../data/Player.json";
import monsters from "../data/Monster.json";

import { createStyles, makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles(
//   createStyles({
//     card: {
//       width: 500,

//       margin: 60
//     },
//     media: {
//       height: 700
//     }
//   })
// );
// const classes = useStyles();


class BattleScreen extends Component {
  
  constructor(props) {
    super(props);
    this.activePlayers = [];

    // this.state = {
    //   players
    // }
  }


  render() {
    const style1 = {
      paddingTop: "15px"
    };
    // const { selectedPlayer } = this.props;
    const activePlayers = [
      players[this.props.selectedId], 
      monsters[Math.floor(Math.random()* monsters.length)]
    ];
    console.log(activePlayers);

    document.body.style.backgroundImage = "url('images/bluesky.jpg')";
    document.body.style.backgroundRepeat = "repeat-y";

    return (
      <Container maxWidth="lg">
        <Grid
          style={style1}
          direction="row"
          alignItems="center"
          justify=""
          container
          spacing={5}
        >
          {activePlayers.map(Player => 
          (
            <>
            <Box>
                {/* <Box className={`${classes.media} ${classes.card}`}> */}
        
                <MonsterCard
                  key={Player.id}
                  id={Player.id}
                  name={Player.name}
                  img={Player.img}
                  health={Player.health}
                  smallAttack={Player.smallAttack}
                  bigAttack={Player.bigAttack}
                  specialAttack={Player.specialAttack}
                />
                <Button
                  onClick={() => {
                    this.props.chooseCharacter(Player);

                  }}
                >
                </Button>
              </Box>
            </>
          )
          )
          }
        </Grid>
      </Container>
    );
  }
}

export default BattleScreen;