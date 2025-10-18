import React from "react";
import { Container, Navbar, Nav, Button, Form, Row, Col, Card, Offcanvas } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import houseImage from './Assets/house.jpg';



export default function App() {
  // inside App.js
  const products = {
    batteries: [
      // High-Voltage Batteries
      {
        name: "Hanchu ESS 9.4kWh HV Battery",
        img: "https://sunboxsolar.co.za/wp-content/uploads/2025/08/left-2.png",
        desc: "Hanchu ESS 9.4kWh advanced energy storage system with compact modular design. Safe, reliable, and high-performance, featuring rapid charge/discharge, smart monitoring, and easy installation for modern solar setups.",
        price: "R41,187.25",
        features: [
          "9.4kWh Stackable Batteries",
          "72kg Module Weight",
          "100A Max. Charge/Discharge Current",
          "95% Depth Of Discharge",
          "IP65 – Enclosure Rating (Weather resistance)"
        ],
         InsideBox: [ "1 x Hanchu ESS 9.4kWh HV Battery"]
      },
      {
        name: "Hanchu ESS High-Voltage BMS Cabinet",
        img: "https://sunboxsolar.co.za/wp-content/uploads/2025/08/%E2%96%8CN%E2%96%8C-%E2%96%8C-.png",
        desc: "Battery management system for safe high-voltage operation.",
        price: "R26,680.00",
        
      },
      // Low-Voltage Batteries
      {
        name: "Hanchu ESS 3.2kWh LV Battery",
        img: "https://sunboxsolar.co.za/wp-content/uploads/2025/08/left1-2.png",
        desc: "Hanchu ESS 3.2kWh energy storage system with compact modular design. Safe, reliable, and high-performance with smart monitoring, rapid charge/discharge, and easy plug-and-play installation.",
        price: "R8,990.00",
        features: [
          "34.9 kg Lighter Weight",
          "40/60A Rapid Charge and Discharge Ability",
          "100% DOD",
          "IP54 – Enclosure rating (Weather resistance)"
        ],
        dimensions: "484 x 165 x 302 mm"
      },
      {
        name: "Hanchu ESS 5.12kWh LV Battery",
        img: "https://sunboxsolar.co.za/wp-content/uploads/2025/08/HOME-ESS-LV-512K-S-01.png",
        desc: "Compact modular battery designed for easy installation and scalability. Supports up to 16 units in parallel, with rapid 100A charge/discharge, 95% usable energy, and built-in smart BMS for safety and reliability.",
        price: "R18,285.00",
        features: [
          "40.5Kg Lighter Weight",
          "100A Rapid Charge and Discharge Ability",
          "95% Depth of Discharge",
          "IP54 – Rating of Enclosure"
        ],
        dimensions: "422 x 421 x 136mm"
      },
      {
        name: "Hanchu ESS 9.4kWh LV Battery",
        img: "https://sunboxsolar.co.za/wp-content/uploads/2025/08/%E5%B7%A6%E4%BE%A7%E8%A7%86-scaled.png",
        desc: "High-performance energy storage system with Blade LFP and CTP technology. Safe, reliable, and easy to install, featuring smart monitoring, rapid charge/discharge, and 95% usable energy.",
        price: "R37,518.75",
        features: [
          "72Kg Lighter Weight",
          "100A Rapid Charge and Discharge Ability",
          "95% Depth of Discharge",
          "IP65 – Rating of Enclosure"
        ],
        dimensions: "430 x 150 x 800mm"
      },
      {
        name: "Hannchu ESS 2.56kWh 24 V Battery",
        img: "https://sunboxsolar.co.za/wp-content/uploads/2025/08/2.56left2-scaled.png",
        desc: "Compact and user-friendly energy storage unit with easy wall mounting and intelligent operation. Supports rapid 100A charge/discharge, 95% usable energy, high safety with smart BMS, and scalable up to 16 units.",
        price: "R7,990.00",
        features: [
          "24.5Kg Lighter Weight",
          "100A Rapid Charge and Discharge Ability",
          "95% Depth of Discharge",
          "IP54 IP – Rating of Enclosure"
        ],
        dimensions: "340 x 160 x 340mm"
      },
    ],
    inverters: [
      // 3-Phase Inverters
      {
        name: "Hanchu ESS 15kW HV 3-phase Inverter",
        img: "https://sunboxsolar.co.za/wp-content/uploads/2025/08/HESS-HY-T-15K-01.png",
        desc: "The Hanchu ESS 15kW 3-Phase Inverter ensures stable, efficient power with 110% unbalanced output, fast 10ms UPS switching, and 40A charging/discharging. With a wide battery range, 200% backup, IP65 protection, and smart control via OLED or mobile app, it’s perfect for reliable indoor or outdoor energy management.",
        price: "R60,863.75",
        features: [
          "30A x 2 Max. PV Input Current",
          "10ms switching time",
          "98.4% Max. Efficiency",
          "IP65 – Enclosure rating (Weather Proof)",
        ],
         dimensions: "534 x 418 x 210 mm",
        InsideBox: [
          "1 x Hanchu ESS 15kW Inverter",
          "2 x Battery Lugss",
          "1 x Parallel Communication Cable",
          "1 x CT Coil",
          "Assorted MC4 connectors",
          "User Manual"
        ]
      },
      {
        name: "Hanchu ESS 30kW 3-Phase Inverter",
        img: "https://sunboxsolar.co.za/wp-content/uploads/2025/08/%E5%B7%A61-scaled.png",
        desc: "The Hanchu ESS 30kW 3-Phase Inverter delivers reliable, high-performance power with 98.8% efficiency, wide battery range, and 100A charge/discharge. It handles unbalanced loads, AC/backup overloading, and parallel operation. With IP65 protection, fast 20ms UPS switching, and smart control via OLED or mobile app, it’s perfect for both residential and commercial energy systems.",
        price: "R97,750.00",
        features: [
          "98.8% Max. Efficiency",
          "100A Charge/Discharge Current",
          "30A PV Input Current",
          "100% Unbalanced Load",
        ],
         dimensions: "800 x 620 x 300 mm"
      },
      {
        name: "Hanchu ESS 50kW 3-Phase Inverter",
        img: "https://sunboxsolar.co.za/wp-content/uploads/2025/08/%E5%B7%A61-scaled.png",
        desc: "The Hanchu ESS 50kW 3-Phase Inverter delivers reliable, high-performance energy for residential and commercial use. With 98.8% efficiency, a wide 135–750V battery range, 100A charge/discharge, and 30A PV input, it handles demanding systems easily. Features include 20ms UPS switching, unbalanced load support, AC/backup overloading, parallel operation, IP65 protection, OLED/mobile control, and intelligent energy management.",
        price: "R116,610.00",
        features: [
          "98.8% Max. Efficiency",
          "100A Charge/Discharge Current",
          "30A PV Input Current",
          "100% Unbalanced Load",
        ],
         dimensions: "800 x 620 x 300 mm"
      },
      // Hybrid Inverters
      {
        name: "Hanchu ESS 12kW Hybrid Inverter",
        img: "https://sunboxsolar.co.za/wp-content/uploads/2025/08/%E5%B7%A6%E4%BE%A7%E8%A7%86%E5%9B%BE.png",
        desc: "This advanced inverter delivers efficient, safe, and reliable solar energy. With up to 99.9% MPPT efficiency, 22A+22A PV input, 100A charging, and full Li-ion BMS support, it ensures stable performance. Features include dual BMS activation, time-slot optimization, IP65 protection, and a sleek, easy-to-install design—ideal for both home and professional solar systems.",
        price: "R34,385.00",
        features: [
          "22A*2 Max.PV Input Current",
          "200A Rapid PV Charge Ability",
          "99.9% MPPT Tracking Efficiency",
          "IP65 – Rating of Enclosure",
        ],
         dimensions: "670 x 440 x 240mm"
      },
      {
        name: "Hanchu ESS 6kW Hybrid Inverter",
        img: "https://sunboxsolar.co.za/wp-content/uploads/2025/08/front-1-600x338.png",
        desc: "The Hanchu ESS 6kW Inverter delivers safe, efficient, and reliable energy for modern homes. With dual MPPT for up to 99.9% efficiency, 16A PV input, and 100A solar charging, it supports Li-ion battery BMS and high-power solar arrays. Features include pure sine wave AC output, intelligent energy management, peak-valley optimization, and easy installation with a sleek, practical design.",
        price: "R17,940.00",
        features: [
          "16A x 2 Max. PV Input Current",
          "100A Rapid PV Charge Ability",
          "99.9% MPPT Tracking Efficiency",
          "IP65 – Enclosure rating (Weather Proof)",
        ],
         dimensions: "556 x 345 x 182 mm",
        InsideBox: [
          "1 x Hanchu ESS 6kW Inverter",
          "4 x Mounting Bolts",
          "2 x Battery Lugs",
          "1 x Parallel Communication Cable",
          "1 x CT Coil",
          "1 x Hex Key for Cover",
          "User Manual"
        ]
      },
      // Off-Grid Inverters
      {
        name: "Hanchu ESS 10kW Off-Grid Inverter",
        img: "https://sunboxsolar.co.za/wp-content/uploads/2025/08/%E6%AD%A3%E8%A7%86%E5%9B%BE-1-600x337.jpg",
        desc: "The Hanchu ESS 10kW Inverter delivers safe, reliable, and efficient energy for modern solar systems. With dual MPPT (up to 99.9% efficiency), 22A PV input, and support for Li-ion batteries, it handles up to 200A charging. Features include pure sine wave AC, BMS communication, time-slot optimization, and easy installation, making it perfect for most households.",
        price: "R27,485.00",
        features: [
          "22A x 2 Max. PV Input Current",
          "200A Rapid Charge Ability",
          "99.9% MPPT Tracking Efficiency",
          "27 kg – Lighter Weight",
        ],
         dimensions: "620 x 445 x 130 mm",
        InsideBox: [
          "1 x Hanchu ESS 10kW Inverter",
          "2 x Battery Lugs",
          "User Manual"
        ]
      },
      {
        name: "Hanchu ESS 3.5kW 24V Off-Grid Inverter",
        img: "https://sunboxsolar.co.za/wp-content/uploads/2025/08/HANCHU-HOME-ESS-3.5KW-24V-INVERTER-2.webp",
        desc: "This inverter delivers reliable, efficient, and stable power with pure sine wave output and a 1.0 power factor. It supports up to 500 VDC PV input, multiple output priorities, and easy installation. Built for durability, it works without a battery, has a detachable dust cover, and includes an EQ function to optimize and extend battery life.",
        price: "R4,990.00",
        features: [
          "7kg – Lighter weight",
          "PV input 60-500VDC",
          "15A MPPT input",
          "100A Charge and Discharge Ability",
        ],
        dimensions: "358 x 295 x 105mm"
      },
      {
        name: "Hanchu ESS 3kW Off-Grid Inverter",
        img: "https://sunboxsolar.co.za/wp-content/uploads/2025/08/left.png",
        desc: "The 3kW inverter delivers reliable, high-performance energy with up to 99.9% efficiency and advanced MPPT technology. It supports multiple battery types, dual Li-ion BMS activation, and intelligent remote monitoring. With 360° protection, pure sine wave output, and power-saving mode, it’s easy to install, simple to operate, and built for safe, efficient performance.",
        price: "R7,590.00",
        features: [
          "40A Max. PV Input Current",
          "120A Rapid Charge Ability",
          "99.9% MPPT Tracking Efficiency",
          "6.2 kg – Lighter Weight",

        ],
        InsideBox: [
          "1 x Hanchu ESS 3kW Inverter",
          "2 x Battery Lugs",
          "User Manual",
          "1 x CAN converter plug"
        ]
      },
      {
        name: "Hanchu ESS 5kW Off-Grid Inverter",
        img: "https://sunboxsolar.co.za/wp-content/uploads/2025/08/%E5%B7%A6%E8%A7%86%E5%9B%BE.jpg",
        desc: "The 5kW Hanchu ESS Inverter delivers reliable, high-efficiency energy with up to 99.9% MPPT efficiency and multiple charge/discharge modes. It supports various battery types with Li-ion BMS communication, offers 360° protection and safety approvals, and features remote monitoring, pure sine wave output, and power-saving mode. Modern, easy to install, and built to perform.",
        price: "R8,946.14",
        features: [
          "18A Max. PV Input Current",
          "80A Rapid Charge Ability",
          "99.9% MPPT Tracking Efficiency",
          "10.8 kg – Lighter Weight",
          
        ],
        dimensions: "426 x 322 x 124 mm",
        InsideBox: [
          "1 x Hanchu ESS 5kW Inverter",
          "2 x Battery Lugs",
          "User Manual"
        ]
      },
    ],
    panels: [
      {
        name: "ReneSolar 620 Watt Panel",
        img: "https://sunboxsolar.co.za/wp-content/uploads/2025/07/2178491786.jpg",
        desc: "High-performance 620W solar panel with efficient monocrystalline cells. Durable, reliable, and easy to install, ideal for residential and commercial use to save on electricity and go green.",
        price: "R1,690.01",
        features: [
          "Bloomberg Tier 1 Global Leading Brand",
          "Advanced Modular Technology",
          "Monocrystalline Cells",
          "Excellent Power Generation Performance"
        ],
        dimensions: "2278 x 1134 x 30 mm"
      },
    ],
  };

  return (
    <div>
      {/* Navbar */}
      <Navbar bg="light" expand="md" fixed="top" className="shadow-sm">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold text-success">
            SolarConnect ☀️
          </Navbar.Brand>

          {/* Offcanvas toggle only for mobile */}
          <Navbar.Toggle aria-controls="offcanvasNavbar" />

          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"  // slides from the right
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#how">How It Works</Nav.Link>
                <Nav.Link href="#products">Products</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section id="home" className="hero-section d-flex align-items-center text-center" 
         style={{
         backgroundImage: `url(${houseImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          }}
        >
        <Container>
          <h1 className="display-5 fw-bold text-light mb-3">
            Save Money on Your Electricity Bills — Go Solar Today!
          </h1>
          <p className="text-light mb-4 px-3">
            <span className="lead">Let the sun power your home and lower your bills.</span> 🌞
          </p>
          <Button className="quoteBtn" size="lg" href="#contact">
            Get a Free Quote
          </Button>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-5 text-center">
        <Container>
          <h2 className="fw-bold mb-3">About</h2>
          <p className="lead px-md-5">
            SolarConnect is a trusted company that connects you with verified solar brands and installers. We help you find the best solar solutions — fast, safe, and reliable — with no selling pressure, honest advice, a seamless connection to top solar providers, and free delivery on all orders.

          </p>
        </Container>
      </section>

      {/* How It Works Section */}
      <section id="how" className="py-5 bg-light text-center">
        <Container>
          <h2 className="fw-bold mb-4">How It Works</h2>
          <Row className="g-4">
            <Col xs={12} md={4}>
              <div className="p-3 shadow-sm rounded h-100 bg-white">
                <h4 className="text-success fw-bold">1️⃣ Contact Me</h4>
                <p>Send me your name, area, and power needs through WhatsApp or the form below.</p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="p-3 shadow-sm rounded h-100 bg-white">
                <h4 className="text-success fw-bold">2️⃣ Get Matched</h4>
                <p>I’ll connect you with trusted solar installers offering the best deals in your area.</p>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <div className="p-3 shadow-sm rounded h-100 bg-white">
                <h4 className="text-success fw-bold">3️⃣ Save Money</h4>
                <p>Once installed, enjoy clean solar energy and say goodbye to load shedding!</p>
              </div>
            </Col>
          </Row>
        </Container>
      
      <div className="mt-5">
        <h2 className="fw-bold mb-3">Get in Touch</h2>
        <p className="lead">Contact me today for a free solar referral quote!</p>

        <div className="d-flex flex-wrap justify-content-center gap-3 mb-4">
          <Button
            variant="success"
            size="lg"
            href="https://wa.me/0712820018"
            target="_blank"
          >
            💬 Chat on WhatsApp
          </Button>
          <Button
            variant="outline-success"
            size="lg"
            href="mailto:your@email.com"
          >
            📧 Send Email
          </Button>
        </div>
        </div>
        
      </section>

      {/* Products Section */}
      <section id="products" className="py-5 text-center">
        <Container>
          <h2 className="fw-bold mb-4 text-success">Sunbox Solar Products</h2>

          {Object.entries(products).map(([category, items]) => (
            <div key={category} className="mb-5">
              <h3 className="fw-bold text-capitalize mb-3">{category}</h3>
              <Row className="g-4 justify-content-center">
                {items.map((product, index) => (
                  <Col xs={12} md={4} key={index}>
                    <Card className="h-100 shadow-sm">
                      <Card.Img
                        variant="top"
                        src={product.img}
                        alt={product.name}
                        className="p-3"
                        style={{ height: "500px", objectFit: "contain" }}
                      />
                      <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>{product.desc}</Card.Text>

                        {/* Key Features */}
                        {product.features && (
                          <>
                            <h6 className="fw-bold mt-2">Key Features:</h6>
                            <ul className="mb-2">
                              {product.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                              ))}
                            </ul>
                          </>
                        )}

                        {/* Dimensions */}
                        {product.dimensions && (
                          <p className="mb-2"><strong>Dimensions:</strong> {product.dimensions}</p>
                        )}

                        {product.InsideBox && (
                          <>
                            <h6 className="fw-bold mt-2">In the Box:</h6>
                            <ul className="mb-2">
                              {product.InsideBox.map((InsideBox, idx) => (
                                <li key={idx}>{InsideBox}</li>
                              ))}
                            </ul>
                          </>
                        )}

                        <h5 className="text-success fw-bold">{product.price}</h5>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          ))}

        </Container>
      </section>

      {/* Contact Section*/}
      {/* Contact / Quotation Section */}
      <section id="contact" className="py-5 text-center">
        <Container>
          <h2 className="fw-bold mb-3">Request a Free Quote</h2>
          <p className="lead">Fill in your details and select the products you are interested in.</p>
          
          <Form className="mx-auto contact-form text-start p-4 rounded shadow-sm bg-light" style={{maxWidth: "700px"}} action="https://formspree.io/f/xovkrgry" method="POST">
            {/* Name */}
            <Row className="mb-3">
              <Col>
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" name="First Name" required />
              </Col>
              <Col>
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" name="Last Name" required />
              </Col>
            </Row>

            {/* Address */}
            <h5 className="mt-3">Address</h5>
            <Row className="mb-3">
              <Col>
                <Form.Label>Street Name</Form.Label>
                <Form.Control type="text" placeholder="Street Name" name="Street Name" required />
              </Col>
              <Col>
                <Form.Label>House Number</Form.Label>
                <Form.Control type="text" placeholder="House Number" name="House Number" required />
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Label>Suburb</Form.Label>
                <Form.Control type="text" placeholder="Suburb" name="Suburb" required />
              </Col>
              <Col>
                <Form.Label>City</Form.Label>
                <Form.Control type="text" placeholder="City" name="City Name" required />
              </Col>
            </Row>

            {/* Email */}
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Your Email" name="Email" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="+27 123 456 7890"
                pattern="\+27 [6-9][0-9]{1} [0-9]{3} [0-9]{4}"
                name="Phone Number"
                required
              />
              <Form.Text className="text-muted" >    Use the South African mobile format starting with +27, e.g. +27 82 123 4567</Form.Text>
            </Form.Group>

            {/* Product Selection */}
            <h5 className="mt-3">Products</h5>
            {Object.entries(products).map(([category, items]) => (
              <div key={category} className="mb-3">
                <h6 className="fw-bold text-capitalize">{category}</h6>
                {items.map((product, index) => (
                  <Row key={index} className="align-items-center mb-2">
                    <Col xs={8}>
                      <Form.Check 
                        type="checkbox"
                        id={`${category}-${index}`}
                        label={product.name}
                        value={product.name}
                        name={`products[${category}]`}
                      />
                    </Col>
                    <Col xs={4}>
                      <Form.Control type="number" placeholder="Qty" min={0}      name={`quantity[${product.name}]`} />
                    </Col>
                  </Row>
                ))}
              </div>
            ))}

            {/* Message */}
            <Form.Group className="mb-3">
              <Form.Label>Additional Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Any special requirements?" name="comment"/>
            </Form.Group>

            {/* Submit Button */}
            <div className="text-center">
              <Button variant="success" type="submit">
                Submit Quote Request
              </Button>
            </div>
          </Form>
        </Container>
      </section>


      {/* Footer */}
      <footer className="text-center py-3 bg-dark text-light">
        <small>© {new Date().getFullYear()} SolarConnect by Shaun | Powered by the Sun ☀️</small>
      </footer>
    </div>
  );
}
