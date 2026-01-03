import { useEffect, useState } from 'react';

// Esta API no necesita llaves ni permisos especiales
const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

// Adaptamos la interfaz a lo que devuelve JSONPlaceholder
interface UserApi {
  id: number;
  name: string;
  email: string;
  username: string;
  website: string;
}

export const App = () => {
  const [users, setUsers] = useState<UserApi[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await fetch(BASE_URL);

        if (!response.ok) throw new Error('Error al conectar con la API');

        const data = await response.json();
        setUsers(data);
      } catch (err) {
        // Tipado de error: comprobamos si es un error real de JS
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading)
    return <div className='p-10 font-mono'>Cargando usuarios...</div>;
  if (error)
    return <div className='p-10 text-red-500 font-bold'>ERROR: {error}</div>;

  return (
    <div className='p-10 bg-white min-h-screen text-black font-sans'>
      <h1 className='text-4xl font-black uppercase mb-10 border-b-4 border-black pb-2'>
        Archive / Users
      </h1>
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {users.map((user) => (
          <li
            key={user.id}
            className='border border-black p-6 hover:bg-black hover:text-white transition-colors'
          >
            <p className='text-xs font-mono mb-2'>ID: 0{user.id}</p>
            <h2 className='text-xl font-bold uppercase'>{user.name}</h2>
            <p className='text-sm opacity-70'>{user.email}</p>
            <p className='mt-4 text-xs font-bold underline cursor-pointer'>
              {user.website}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
