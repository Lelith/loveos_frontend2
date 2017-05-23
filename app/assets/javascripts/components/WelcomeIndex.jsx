class WelcomeIndex extends React.Component {
  render() {
    const data = this.props.data || getFakeProducts();
    const productsList = data;
    const bannerOrganism = getBannerOrganism();
    const bannerOrganism2 = getBannerOrganism2();
    const promoboxOrganism = getPromoboxOrganism();
    const promoboxOrganism2 = getPromoboxOrganism2();

    return (
      <div>
        <PromoboxOrganism {...promoboxOrganism}></PromoboxOrganism>
        <BannerOrganism  {...bannerOrganism}></BannerOrganism>
        <ProductsList productsList={productsList}></ProductsList>
        <BannerOrganism {...bannerOrganism2}></BannerOrganism>
        <PromoboxOrganism {...promoboxOrganism2}></PromoboxOrganism>
      </div>
    )
  }
}

getFakeProducts = () => {
  return [
    {
      "Image": {
        "src": "http://lorempixel.com/400/200/",
        "alt": "Alternative text"
      },
      "Title": {
        "value": "Jasper"
      },
      "Description": {
        "value": "Elit duis commodo dolore reprehenderit culpa veniam proident. Amet labore ut minim cillum velit pariatur ut minim dolore. Qui ut sint enim consequat dolor ut aute. Occaecat ea fugiat cupidatat cupidatat cupidatat proident commodo amet. Nostrud nisi laborum minim veniam sunt non do aliquip nisi reprehenderit cupidatat eiusmod aliquip tempor. Aliqua incididunt qui nulla labore adipisicing dolor excepteur. Non ipsum minim ut officia ipsum dolore dolore.\r\n"
      },
      "Button": {
        "value": "Go!",
        onClick: function(){
         location.replace("/product/" + 1);
        }
      }
    },
    {
      "Image": {
        "src": "http://lorempixel.com/400/200/animals",
        "alt": "Alternative text"
      },
      "Title": {
        "value": "Digitalus"
      },
      "Description": {
        "value": "Minim irure cupidatat excepteur enim deserunt quis. Incididunt aute minim minim dolore sint elit. Magna qui in ipsum occaecat enim. Lorem est fugiat culpa sunt voluptate amet officia culpa tempor pariatur veniam.\r\n"
      },
      "Button": {
        "value": "Go!",
        onClick: function(){
         location.replace("/product/" + 2);
        }
      }
    },
    {
      "Image": {
        "src": "http://lorempixel.com/400/200/technics",
        "alt": "Alternative text"
      },
      "Title": {
        "value": "Asimiline"
      },
      "Description": {
        "value": "Exercitation proident pariatur non minim non Lorem. In pariatur eiusmod ipsum in officia voluptate commodo non ea eu nulla elit Lorem esse. Ut est cupidatat nulla velit Lorem do irure est non qui. Nostrud officia sit pariatur excepteur cupidatat exercitation fugiat do consectetur non. Id magna duis voluptate excepteur. Ipsum magna qui amet nulla deserunt anim amet reprehenderit. Adipisicing mollit aliqua proident commodo elit commodo non non minim ex eu consectetur.\r\n"
      },
      "Button": {
        "value": "Go!",
        onClick: function(){
         location.replace("/product/" + 3);
        }
      }
    }
  ]
}

getBannerOrganism = () => {
  return {
    Banner: {
      className: "banner-success",
      Title: {
        value: "3M products!"
      },
      Description: {
        value: "And around 50k different sellers"
      },
      Button: {
        value: "Discover us!",
        onClick: function () {
          location.replace("/list/index");
        }
      }
    }
  }
}

getBannerOrganism2 = () => {
  return {
    Banner: {
      className: "banner-warning",
      Title: {
        value: "Join the group!"
      },
      Description: {
        value: "More than 2M already joined us this year!"
      },
      Button: {
        value: "Join!"
      }
    }
  }
}

getPromoboxOrganism = () => {
  return {
    Promobox: {
      Title: {
        value: "John Doe"
      },
      Description: {
        value: "Minim irure cupidatat excepteur enim deserunt quis. Incididunt aute minim minim dolore sint elit. Magna qui in ipsum occaecat enim. Lorem est fugiat culpa sunt voluptate amet officia culpa tempor pariatur veniam.\r\n"
      }
    }
  }
}

getPromoboxOrganism2 = () => {
  return {
    Promobox: {
      Title: {
        value: "Karen Fitzgerald"
      },
      Description: {
        value: "Minim irure cupidatat excepteur enim deserunt quis. Incididunt aute minim minim dolore sint elit. Magna qui in ipsum occaecat enim. Lorem est fugiat culpa sunt voluptate amet officia culpa tempor pariatur veniam.\r\n"
      }
    }
  }
}
