class ListIndex extends React.Component {
  render() {
    const data = this.props.data || getFakeProducts2();
    const productsList = data;
    const bannerOrganism = getBannerOrganism3();
    const bannerOrganism2 = getBannerOrganism4();
    const promoboxOrganism = getPromoboxOrganism3();

    return (
      <div>
        <ProductsList productsList={productsList}></ProductsList>
        <BannerOrganism {...bannerOrganism}></BannerOrganism>
        <PromoboxOrganism {...promoboxOrganism}></PromoboxOrganism>
        <BannerOrganism {...bannerOrganism2}></BannerOrganism>
      </div>
    )
  }
}

getFakeProducts2 = () => {
  return [
    {
     "Image": {
       "src": "http://lorempixel.com/400/200/sports",
       "alt": "Alternative text"
     },
     "Title": {
       "value": "Photobin"
     },
     "Description": {
       "value": "Id eiusmod adipisicing sit excepteur. Sit sint ad adipisicing adipisicing eiusmod aliquip ut eu laboris laborum ipsum occaecat duis commodo. Cillum ipsum reprehenderit dolor mollit ex. Aliqua officia ea ea minim laborum quis laborum. Lorem ad incididunt eu ipsum cupidatat tempor ullamco enim cupidatat dolore ut occaecat reprehenderit.\r\n"
     },
     "Button": {
       "value": "Go!",
        onClick: function(){
          location.replace("/product/" + 5);
        }
     }
    },
    {
     "Image": {
       "src": "http://lorempixel.com/400/200/animals",
       "alt": "Alternative text"
     },
     "Title": {
       "value": "Quantalia"
     },
     "Description": {
       "value": "Et in laborum cillum tempor et fugiat deserunt nisi excepteur ipsum pariatur irure. Qui sit eiusmod elit velit. Eu commodo aliqua non ex enim. Culpa velit voluptate proident dolore Lorem duis mollit.\r\n"
     },
     "Button": {
       "value": "Go!",
        onClick: function(){
          location.replace("/product/" + 6);
        }
     }
    },
    {
     "Image": {
       "src": "http://lorempixel.com/400/200/technics",
       "alt": "Alternative text"
     },
     "Title": {
       "value": "Twiggery"
     },
     "Description": {
       "value": "Id eiusmod qui ut laborum duis commodo dolore enim elit nostrud aliquip excepteur fugiat. Aute officia mollit aliqua esse laboris dolor nostrud occaecat incididunt consequat officia. Mollit sint proident nulla aliquip fugiat sunt anim voluptate sunt elit aute enim eu non. Reprehenderit esse cupidatat proident magna pariatur consequat do.\r\n"
     },
     "Button": {
       "value": "Go!",
        onClick: function(){
          location.replace("/product/" + 7);
        }
     }
    },
    {
     "Image": {
       "src": "http://lorempixel.com/400/200/nature",
       "alt": "Alternative text"
     },
     "Title": {
       "value": "Geekology"
     },
     "Description": {
       "value": "Dolore duis fugiat qui sit ut qui aliquip fugiat anim. Culpa amet nostrud voluptate in ipsum aliquip aliqua nisi quis ipsum labore exercitation. Proident esse esse dolor mollit dolor et pariatur proident incididunt. Enim dolore consectetur sint qui duis exercitation excepteur commodo Lorem dolor proident. Labore excepteur esse esse mollit ut laborum officia sint aute ullamco consequat. Consectetur exercitation laborum labore sint occaecat.\r\n"
     },
     "Button": {
       "value": "Go!",
        onClick: function(){
          location.replace("/product/" + 8);
        }
     }
    },
    {
     "Image": {
       "src": "http://lorempixel.com/400/200/",
       "alt": "Alternative text"
     },
     "Title": {
       "value": "Accufarm"
     },
     "Description": {
       "value": "Pariatur voluptate commodo sit officia ut ipsum ad consectetur culpa excepteur et proident eu. Ex dolor veniam nostrud veniam. Fugiat consequat ipsum consequat et nisi dolor quis consequat et. Duis aute incididunt incididunt proident dolor deserunt sit magna ut ullamco occaecat et. Mollit eiusmod laborum elit commodo commodo sit magna irure ullamco aliquip. Quis pariatur amet reprehenderit non ullamco reprehenderit quis. Nostrud et laborum et nostrud.\r\n"
     },
     "Button": {
       "value": "Go!",
        onClick: function(){
          location.replace("/product/" + 9);
        }
     }
    }
  ]
}

getBannerOrganism3 = () => {
  return {
    Banner: {
      className: "banner-info",
      Title: {
        value: "Discover us!"
      }
    }
  }
}

getBannerOrganism4 = () => {
  return {
    Banner: {
      className: "banner-warning",
      Title: {
        value: "First platform in the world"
      },
      Button: {
        className: "hide"
      }
    }
  }
}

getPromoboxOrganism3 = () => {
  return {
    Promobox: {
      Title: {
        value: "Jane Doe"
      },
      Description: {
        value: "Minim irure cupidatat excepteur enim deserunt quis. Incididunt aute minim minim dolore sint elit. Magna qui in ipsum occaecat enim. Lorem est fugiat culpa sunt voluptate amet officia culpa tempor pariatur veniam.\r\n"
      }
    }
  }
}
