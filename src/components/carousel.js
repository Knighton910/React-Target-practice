var React = require('react');
var Slider = require('react-slick');


var SampleNextArrow = React.createClass({
  render: function() {
    return <div {...this.props}
    style={{display: 'block', background: 'tomato'}}></div>;
  }
});

var SamplePrevArrow = React.createClass({
  render: function() {
    return (
      <div {...this.props}
      style={{display: 'block', background: 'tomato'}}></div>
    );
  }
});


var SimpleSlider = React.createClass({
  render: function () {
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
    };
    return (
      <div>
        <Slider {...settings}>
          <div className="img-1"></div>
          <div className="img-2"></div>
          <div className="img-3"></div>
          <div className="img-4"></div>
          <div className="img-5"></div>
          <div className="img-6"></div>
        </Slider>
      </div>
    );
  }
});

export default SimpleSlider;
