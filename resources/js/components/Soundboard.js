import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

let audio1 = new Audio("./animals/bear.mp3")
let audio2 = new Audio("./animals/camel.mp3")
let audio3 = new Audio("./animals/cougar.wav")
let audio4 = new Audio("./animals/cricket.wav")
let audio5 = new Audio("./animals/elephant.wav")
let audio6 = new Audio("./animals/frog.wav")
let audio7 = new Audio("./animals/gibbon.mp3")
let audio8 = new Audio("./animals/harbor-seal.mp3")
let audio9 = new Audio("./animals/leopard.wav")

const start1 = () => {
  pauseAll()
  audio1.play()
}
const start2 = () => {
  pauseAll()
  audio2.play()
}
const start3 = () => {
  pauseAll()
  audio3.play()
}
const start4 = () => {
  pauseAll()
  audio4.play()
}
const start5 = () => {
  pauseAll()
  audio5.play()
}
const start6 = () => {
  pauseAll()
  audio6.play()
}
const start7 = () => {
  pauseAll()
  audio7.play()
}
const start8 = () => {
  pauseAll()
  audio8.play()
}
const start9 = () => {
  pauseAll()
  audio9.play()
}

const pauseAll = () => {
  audio1.pause()
  audio1.currentTime = 0
  audio2.pause()
  audio2.currentTime = 0
  audio3.pause()
  audio3.currentTime = 0
  audio4.pause()
  audio4.currentTime = 0
  audio5.pause()
  audio5.currentTime = 0
  audio6.pause()
  audio6.currentTime = 0
  audio7.pause()
  audio7.currentTime = 0
  audio8.pause()
  audio8.currentTime = 0
  audio9.pause()
  audio9.currentTime = 0
}

const images = [
    {
      url: '/animals/bear.jpg',
      audio: 'start1',
      title: 'Bear',
      width: '33.3%',
    },
    {
      url: '/animals/camel.jpg',
      audio: 'start2',
      title: 'Camel',
      width: '33.3%',
    },
    {
      url: '/animals/cougar.jpg',
      audio: 'start3',
      title: 'Cougar',
      width: '33.3%',
    },
    {
      url: '/animals/cricket.jpg',
      audio: 'start4',
      title: 'Cricket',
      width: '33.3%',
    },
    {
      url: '/animals/elephant.jpg',
      audio: 'start5',
      title: 'Elephant',
      width: '33.3%',
    },
    {
      url: '/animals/frog.jpg',
      audio: 'start6',
      title: 'Frog',
      width: '33.3%',
    },
    {
      url: '/animals/gibbon.jpg',
      audio: 'start7',
      title: 'Gibbon',
      width: '33.3%',
    },
    {
      url: '/animals/harbor-seal.jpg',
      audio: 'start8',
      title: 'Harbor Seal',
      width: '33.3%',
    },
    {
      url: '/animals/leopard.jpg',
      audio: 'start9',
      title: 'Leopard',
      width: '33.3%',
    },
  ];
  
  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      // minWidth: 300,
      width: '100%',
    },
    image: {
      position: 'relative',
      height: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }));

  export default function ButtonBases() {
    const classes = useStyles();
      
    return (
      <div className={classes.root}>
        {images.map(image => (
          <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
              width: image.width,
            }}
            onClick={eval(image.audio)}
          >
            <span
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`,
              }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton}>
              <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
              >
                {image.title}
                <span className={classes.imageMarked} />
              </Typography>
            </span>
          </ButtonBase>
        ))}
      </div>
    );
  }
  