import React from "react";
import { Card } from "react-bootstrap";
import Logo from "../shared_components/Logo";
import ButtonLink from "../shared_components/utilities/ButtonLink";

export default function LoginSamane() {
  return (
    <Card className="homepage-card h-100 card-shadow border-0 d-flex  align-items-center flex-column justify-content-center">
      <div className="d-flex align-items-center flex-column justify-content-center">
        <div className="text-center pb-4">
          <Logo />
        </div>
        <div className="d-flex my-4  w-100 justify-content-center">
          <h3 className="text-center"> سامانه ویدئوکنفرانس شرکت مهندسی و توسعه گاز ایران</h3>
        </div>
        {/* <h4 className="homepage-seprator">
            سامانه ارتباطات ویدئویی سازمانی
        </h4> */}
        <div className="homepage-seprator"/>
            <p className="homepage-description">
                {` برگزاری جلسات، نشست‌ها و ارتباطات ویدئویی سازمانی \n
                با استفاده از زیرساخت ارتباطی شرکت ملی گاز ایران

 `}
            </p>
                    <div className="homepage-button-enter">
                                    <ButtonLink to="/signin" variant="brand" className="btn">{'ورود به سامانه'}</ButtonLink>

                    </div>
        <div/>
      </div>
      {/* <Card.Body className="p-4">
        <div className="homepage-card-icon-circle rounded-circle mb-4 d-flex align-items-center justify-content-center">
        
        </div>
        <Card.Title className="pt-2">ttt  </Card.Title>
        <Card.Text className="text-muted">  description  </Card.Text>
      </Card.Body> */}
    </Card>
  );
}
