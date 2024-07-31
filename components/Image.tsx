import Image from 'next/image';

const UserProfile = () => (
  <div className="flex items-center">
    <Image
      src="/images/avatar.jpg"
      alt="User Avatar"
      width={40}
      height={40}
      className="rounded-full mr-3"
    />
    {/* Other content */}
  </div>
);

export default UserProfile;
