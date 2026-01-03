export default interface UserApi {
  id: string | number;
  name: string;
  email: string;
  role: 'owner' | 'admin' | 'member' | 'viewer';
  added_at: number; // Unix timestamp
}
