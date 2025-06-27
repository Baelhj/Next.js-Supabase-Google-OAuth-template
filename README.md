# Next.js + Supabase + Google OAuth Template

A complete Next.js 15 template with Supabase authentication and Google OAuth integration.

## Features

- ✅ **Next.js 15** with App Router
- ✅ **Supabase Integration** for authentication and database
- ✅ **Google OAuth** authentication
- ✅ **Protected Routes** with component-level authentication
- ✅ **Tailwind CSS** for styling
- ✅ **TypeScript Ready** (can be easily converted)
- ✅ **Responsive Design**

## Quick Start

### 1. Clone the template
```bash
git clone <your-template-repo-url>
cd your-project-name
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up environment variables
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key
```

### 4. Set up Supabase
1. Create a new project at [supabase.com](https://supabase.com)
2. Get your project URL and API keys from Settings → API
3. Add them to your `.env.local` file

### 5. Configure Google OAuth
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select existing one
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add your domain to authorized origins and redirect URIs
6. In Supabase Dashboard → Authentication → Providers → Google:
   - Enable Google provider
   - Add your Google Client ID and Client Secret

### 6. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

```
├── app/
│   ├── auth/
│   │   └── callback/
│   │       └── route.js          # OAuth callback handler
│   │   ├── dashboard/
│   │   │   └── page.jsx              # Protected dashboard page
│   │   ├── globals.css
│   │   ├── layout.js                 # Root layout with AuthProvider
│   │   └── page.js                   # Home page with login
│   ├── components/
│   │   └── LoginButton.js            # Google OAuth login component
│   ├── contexts/
│   │   └── AuthContext.js            # Authentication context
│   ├── lib/
│   │   └── supabase.js               # Supabase client configuration
│   ├── middleware.js                 # Route protection middleware
│   └── package.json
```

## Key Components

### Authentication Context (`contexts/AuthContext.js`)
Manages user authentication state across the application.

### Supabase Client (`lib/supabase.js`)
Configures Supabase client for both client and server-side usage.

### Login Button (`components/LoginButton.js`)
Handles Google OAuth sign-in and displays user status.

### Dashboard (`app/dashboard/page.jsx`)
Protected page that requires authentication.

## Customization

### Adding New Protected Routes
1. Create a new page in `app/`
2. Add authentication check:
```javascript
'use client'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ProtectedPage() {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/')
    }
  }, [user, loading, router])

  if (loading) return <div>Loading...</div>
  if (!user) return null

  return <div>Your protected content here</div>
}
```

### Adding Database Operations
Use the Supabase client in your components:
```javascript
import { supabase } from '@/lib/supabase'

// Example: Fetch data
const { data, error } = await supabase
  .from('your_table')
  .select('*')
  .eq('user_id', user.id)
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key |
| `SUPABASE_SERVICE_ROLE_KEY` | Your Supabase service role key |

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Other Platforms
Make sure to set the environment variables in your hosting platform's dashboard.

## Support

If you encounter any issues, check the [Supabase documentation](https://supabase.com/docs) or [Next.js documentation](https://nextjs.org/docs).
