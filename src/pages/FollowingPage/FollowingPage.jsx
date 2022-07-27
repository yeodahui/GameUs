import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderForm from "../../components/modules/HeaderForm/HeaderForm";
import BottomNavigateBar from "../../components/modules/BottomNavigateBar/BottomNavigateBar";
import FollowList from "../../components/organisms/FollowList/FollowList";
import { getFollowings } from "./FollowingPageAPI";

function FollowingPage() {
  // useParams()를 사용하여 url에 있는 파라미터(accountname)를 받아옵니다.
  let { accountname } = useParams();
  const [followings, setFollowings] = useState(null);

  useEffect(() => {
    getFollowings(accountname, setFollowings);
  }, [accountname]);

  return (
    <section>
      <h2 className="a11y-hidden">팔로잉 페이지</h2>
      <HeaderForm
        backButton={true}
        title="Followings"
        titleSize="large"
        menuButton={false}
      />
      <div className="wrapper-contents">
        {followings && <FollowList list={followings} />}
      </div>
      <BottomNavigateBar />
    </section>
  );
}

export default FollowingPage;