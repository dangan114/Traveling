import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider, Typography, GridList, GridListTile, Button } from '@material-ui/core/';
// import GridListTileBar from '@material-ui/core/GridListTileBar';
// import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
    marginBottom: '10vh'
  },
  gridList: {
    flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)',
  },
  title: {
    color: theme.palette.primary.light,
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
  },
}));



/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function ImageDisplay(props) {
  const classes = useStyles();

  let [width, setWidth] = useState(0)

  useEffect(() => {
      function handleResize() {
          setWidth(window.innerWidth)
      }

      window.addEventListener('resize', handleResize);

      handleResize();

  }, [width])

  function imageSpacing() {
      var width = window.innerWidth; 
      if (width >= 400) {
          return 2.5;
      } else {
          return 1; 
      }
  }

  return (
            <GridList className={classes.gridList} cols={imageSpacing()}>
                {props.images.map((image) => (
                <GridListTile key={image} style={{ height: '50vh' }}>
                    <img src={image} />
                </GridListTile>
                ))}
            </GridList>
  
  );
}
