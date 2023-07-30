import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";

export default function AboutUs() {
  return (
    <Layout
      headerTitle="About us"
      headerButton={
        <Link to="/">
          <button className="home-button">Back to Home</button>
        </Link>
      }
    >
      <div className="about-us">
        <h1>This is About Us page</h1>
        <div className="paragraph-div">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
            nisi scelerisque eu ultrices. Magna ac placerat vestibulum lectus
            mauris ultrices eros in cursus. Mus mauris vitae ultricies leo
            integer malesuada. Porttitor massa id neque aliquam vestibulum
            morbi. Sollicitudin tempor id eu nisl. Est pellentesque elit
            ullamcorper dignissim.
          </p>
        </div>

        <div className="paragraph-div">
          <p>
            Maecenas ultricies mi eget mauris pharetra. Id porta nibh venenatis
            cras sed felis eget velit. Venenatis tellus in metus vulputate eu
            scelerisque felis imperdiet. Semper feugiat nibh sed pulvinar proin
            gravida hendrerit lectus. Accumsan in nisl nisi scelerisque eu
            ultrices vitae auctor eu. Non consectetur a erat nam. Orci eu
            lobortis elementum nibh tellus molestie nunc non blandit. Neque
            viverra justo nec ultrices dui sapien eget mi.
          </p>
        </div>
        <div className="paragraph-div">
          <p>
            Magna ac placerat vestibulum lectus mauris. At consectetur lorem
            donec massa. Ac auctor augue mauris augue. Tortor dignissim
            convallis aenean et tortor at risus. Semper eget duis at tellus.
            Quisque id diam vel quam elementum pulvinar etiam non. Egestas
            egestas fringilla phasellus faucibus scelerisque eleifend. Pharetra
            sit amet aliquam id diam maecenas ultricies mi eget.
          </p>
        </div>

        <div className="paragraph-div">
          <p>
            In fermentum posuere urna nec tincidunt praesent semper feugiat
            nibh. Ut sem viverra aliquet eget sit. Amet aliquam id diam
            maecenas. Elementum pulvinar etiam non quam lacus suspendisse
            faucibus interdum posuere. Ac turpis egestas integer eget aliquet
            nibh praesent. Interdum consectetur libero id faucibus nisl
            tincidunt. Amet massa vitae tortor condimentum lacinia quis.
            Imperdiet nulla malesuada pellentesque elit eget. Magna fringilla
            urna porttitor rhoncus dolor purus non enim praesent. Non odio
            euismod lacinia at quis risus. Adipiscing commodo elit at imperdiet
            dui. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae
            congue. Dui ut ornare lectus sit amet est placerat in egestas.
            Molestie a iaculis at erat pellentesque. Quam adipiscing vitae proin
            sagittis.
          </p>
        </div>
      </div>
    </Layout>
  );
}
