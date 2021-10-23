import { Card, CardBody, CardText, CardTitle, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faCode, faHeartbeat} from '@fortawesome/free-solid-svg-icons';

const HomeAboutCards = () => {
  return (
    <Row className="mb-4">
      <Col sm={12} md={4} className="mb-2 mb-md-0 ">
        <Card className="d-flex align-items-center justify-content-center flex-row pl-4 pl-md-0 pl-lg-4 py-2">
          <FontAwesomeIcon icon={faCheckCircle} size="2x" className="text-dark d-md-none d-lg-flex" />
          <CardBody>
            <CardTitle tag="h2" className="h5 font-weight-bolder text-dark">
              Free for all
            </CardTitle>
            <CardText className="text-dark">This service that we offer is completely free for all to use.</CardText>
          </CardBody>
        </Card>
      </Col>
      <Col sm={12} md={4} className="mb-2 mb-md-0 ">
        <Card className="d-flex align-items-center justify-content-center flex-row pl-4 pl-md-0 pl-lg-4 py-2">
          <FontAwesomeIcon icon={faCode} size="2x" className="text-dark d-md-none d-lg-flex" />
          <CardBody>
            <CardTitle tag="h2" className="h5 font-weight-bolder text-dark">
            Built with NCR APIs
            </CardTitle>
            <CardText className="text-dark">View the code, clone the repository, and get started on your own.</CardText>
          </CardBody>
        </Card>
      </Col>
      <Col sm={12} md={4} className="mb-2 mb-md-0 ">
        <Card className="d-flex align-items-center justify-content-center flex-row pl-4 pl-md-0 pl-lg-4 py-2">
          <FontAwesomeIcon icon={faHeartbeat} size="3x" className="text-dark d-md-none d-lg-flex" />
          <CardBody>
            <CardTitle tag="h2" className="h5 font-weight-bolder text-dark">
              Reduces the Carbon Footprint
            </CardTitle>
            <CardText className="text-dark">We have built this by considering the nature and our Earth in mind.</CardText>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};
export default HomeAboutCards;
