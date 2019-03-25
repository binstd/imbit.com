// import { Link } from "gatsby"
// import PropTypes from "prop-types"
// import React from "react"

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

// export default Header


import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { navigate } from "@reach/router";

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import LensIcon from '@material-ui/icons/Lens';
// import { Link } from "gatsby";
import Link from '@material-ui/core/Link';
import imBitlogo from '../images/imBitlogo.svg';
const styles = theme => ({

  root: {
    width: '100%',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },  
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  colorMain: {
      color:'#1abc9c'
  },
  colorRopsten:{
    color:'#FF3E96'
  },
  colorRinkeby:{
    color:'#FFD700'
  },
  colorKovan:{
    color:'#690496'
  }
})


const ButtonAppBar = class ButtonAppBar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
          userinfo:{},
          anchorEl: null,
          mobileMoreAnchorEl: null,
          network:'',
          address:''
        }
    }
    handleProfileMenuOpen = event => {
        this.setState({ anchorEl: event.currentTarget });
    };
    
    handleMenuClose = () => {
        this.setState({ anchorEl: null });
        this.handleMobileMenuClose();
    };
    
    handleMobileMenuOpen = event => {
        this.setState({ mobileMoreAnchorEl: event.currentTarget });
    };

    handleMobileMenuClose = () => {
        this.setState({ mobileMoreAnchorEl: null });
    };
    
    componentDidMount() {
       
    }

    render() {
        // const { classes } = this.props;
        const { userinfo, anchorEl, mobileMoreAnchorEl,networkId} = this.state;
        const { classes } = this.props;
        const isMenuOpen = Boolean(anchorEl);
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
        let user_label;

        //未登录
        if (JSON.stringify(userinfo) === '{}') {
            user_label = <Button color="inherit"  onClick={() => this.payToken()} > 登录 </Button>          
        } else {
            //已登录
            user_label =  
            <div>
            {/* <Button color="inherit"  onClick={() => navigate(`/dapp/${userinfo.address}`)} > dapp </Button> */}
            <div className={classes.sectionDesktop} >
                <Button color="inherit"  onClick={() => navigate(`/dapp/${userinfo.address}`)} > dapp </Button>
                <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
                
                >
                  <AccountCircle />
                </IconButton>
            </div>
            <div className={classes.sectionMobile}>
                <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                    <MoreIcon />
                </IconButton>
            </div>
            </div>
        }

        const renderMenu = (
            <Menu
              anchorEl={anchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={isMenuOpen}
              onClose={this.handleMenuClose}
            >
              <MenuItem onClick={() => navigate(`/userinfo`)} >个人中心</MenuItem>
              <MenuItem onClick={() => this.handleLoggedOut()} >退出</MenuItem>
              {/* <Button color="inherit"  > 退出 </Button> */}
            </Menu>
          );
      
          const renderMobileMenu = (
            <Menu
              anchorEl={mobileMoreAnchorEl}
              anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              open={isMobileMenuOpen}
              onClose={this.handleMobileMenuClose}
            >

              <MenuItem  onClick={() => navigate(`/userinfo`)} >
                <p>个人中心</p>
              </MenuItem>
              <MenuItem   onClick={() => navigate(`/dapp/${userinfo.address}`)}  >
                <p>我的Dapp</p>
              </MenuItem>
             
              <MenuItem onClick={() => this.handleLoggedOut()}>
              
                <p>退出</p>
              </MenuItem>
            </Menu>
          );
          let networkName,networkColor = ''
          switch (networkId) {
            case "1":
                networkColor = classes.colorMain;
                networkName = 'main'
                break
            case "2":
                networkColor = '';
                networkName = 'morden'
                break
            case "3":
                networkColor = classes.colorRopsten;
                networkName = 'ropsten'
                break
            case "4":
                networkColor = classes.colorRinkeby;
                networkName = 'rinkeby'
                break
            case "42":
                networkColor = classes.colorKovan;
                networkName = 'kovan'
                break
            default:
                networkName = ' '
        }
        const viewNetwork = (
            <div>
             <Button color="inherit"  onClick={() => this.login()} > 
                <LensIcon className={networkColor}  style= {{ fontSize: 15, marginRight:'5px' }} /> {networkName} 
             </Button>  
           
            </div>    
        ); 

        return (
            <div className={classes.root}>
                <AppBar position="fixed"  className={classes.appBar} >
                    <Toolbar>
                        <div className={classes.sectionDesktop} >
                        {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu"> */}
                            <img
                                src={imBitlogo}
                                style={{ height: 30, width: 108, margin: '0 35px 5px 0' }}
                            />
                        {/* </IconButton> */}
                        </div>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            <Button color="inherit"  onClick={() => navigate(`/`)} >首页</Button>
                          
                            <Link
                                href="https://imbit-dapp-demo.netlify.com/"
                                target="_blank"
                                rel ="noopener"
                                style={{
                                    color: `white`,
                                    textDecoration: `none`,
                                }}
                            >
                                 <Button color="inherit" >demo</Button>
                             </Link>
                             <Link href="https://www.binstd.com/" 
                                target="_blank"
                                rel ="noopener"
                                style={{
                                    color: `white`,
                                    textDecoration: `none`,
                                }}
                             >
                                <Button color="inherit" >binstd</Button>
                            </Link>
                            
                            {/* <Button color="inherit"  onClick={() => navigate(`/dapp/index/`)} >binstd</Button> */}

                        </Typography>
                       
                    </Toolbar>

                    {renderMenu}
                    {renderMobileMenu}
                </AppBar>
            
             </div>
        )
    }
};



ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);
