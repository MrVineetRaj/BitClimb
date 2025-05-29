import ProfileMetrics from "@/components/profile/profile-metrics";
import ProfilePageHeatMap from "@/components/profile/profile-page-heatmap";
import SubmissionContainerForProfile from "@/components/profile/submission-container-for-profile";
import { useAuthStore } from "@/store/useAuthStore";
import { ChartArea, Lightbulb } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProfilePage = () => {
  const { profileId } = useParams();
  const { isLoadingPublicProfile, authUser, getPublicUserProfile } =
    useAuthStore();
  const [publicProfile, setPublicProfile] = useState(null);
  const [percentage, setPercentage] = useState(30);

  useEffect(() => {
    const fetchPublicProfile = async () => {
      try {
        const profileData = await getPublicUserProfile(profileId);
        setPublicProfile(profileData);
        console.log("Public Profile Data:", profileData);
      } catch (error) {
        console.error("Failed to fetch public profile:", error);
      }
    };

    fetchPublicProfile();

    // console.log(authUser);
  }, [profileId, getPublicUserProfile]);
  return (
    <div className="w-full md:w-[90%] xl:w-[60%]  ">
      <div className="w-full flex items-center justify-center text-gray-600 text-sm mb-4">
        <Lightbulb className="size-4" />{" "}
        <span>
          Tip {":"} You can directly share this profile even with friends who
          are not registered here
        </span>
      </div>
      <ProfileMetrics publicProfile={publicProfile} profileId={profileId} />
      <ProfilePageHeatMap publicProfile={publicProfile} profileId={profileId} />
      <SubmissionContainerForProfile profileId={profileId} />
    </div>
  );
};

export default ProfilePage;
