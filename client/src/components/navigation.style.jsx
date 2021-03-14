const drawerWidth = 300;
const toolbarHeight = 65;

export const styles = {
    root: {
      display: 'flex',
    },
    drawer: {
      marginTop: toolbarHeight,
      padding:{
        top: toolbarHeight
      },
      width: drawerWidth,
      flexShrink: 0,
      paper: {
        marginTop: toolbarHeight
      }
    },
    appBar: {
      width: `100%`,
      marginLeft: drawerWidth,
    },
    menuButton: {
      marginRight: 2,
      display: 'none',
    },
    // necessary for content to be below app bar
    content: {
      flexGrow: 1,
      padding: 3,
      marginLeft: drawerWidth,
      marginTop: toolbarHeight,
      padding: 2
    },
    innerDrawer:{
      width: drawerWidth,
      flexShrink: 0
    },
    toolbar:{
      innerHeight: toolbarHeight
    }
  };