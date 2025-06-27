# Template Configuration

This is a Next.js + Supabase + Google OAuth template. Follow these steps to customize it for your project.

## Initial Setup

1. **Rename the project**:
   - Update `package.json` name field
   - Update README.md title
   - Update any references to "PromptVault"

2. **Set up environment variables**:
   ```bash
   cp .env.example .env.local
   # Then fill in your actual values
   ```

3. **Configure Supabase**:
   - Create new Supabase project
   - Update environment variables
   - Configure Google OAuth

## Customization Points

### Branding
- Update title in `app/layout.js`
- Change colors in Tailwind classes
- Update favicon and logos

### Authentication
- Add more OAuth providers in Supabase
- Customize login UI in `components/LoginButton.js`
- Modify user profile display

### Database
- Create tables in Supabase
- Add database operations in components
- Set up Row Level Security (RLS)

### Styling
- Modify `app/globals.css`
- Update Tailwind configuration
- Add custom components

## File Structure

```
├── app/                    # Next.js App Router
│   ├── auth/callback/      # OAuth callback handler
│   ├── dashboard/          # Protected dashboard
│   ├── layout.js           # Root layout
│   └── page.js             # Home page
├── components/             # Reusable components
├── contexts/               # React contexts
├── lib/                    # Utility libraries
└── middleware.js           # Route protection
```

## Common Modifications

### Adding a New Page
1. Create file in `app/` directory
2. Add authentication if needed
3. Update navigation

### Adding Database Tables
1. Create table in Supabase dashboard
2. Set up RLS policies
3. Add CRUD operations in components

### Styling Changes
1. Modify Tailwind classes
2. Update `globals.css`
3. Create custom components

## Deployment Checklist

- [ ] Environment variables set
- [ ] Supabase project configured
- [ ] Google OAuth working
- [ ] All routes tested
- [ ] Database tables created
- [ ] RLS policies configured

## Support

For issues with:
- **Next.js**: Check [Next.js docs](https://nextjs.org/docs)
- **Supabase**: Check [Supabase docs](https://supabase.com/docs)
- **Google OAuth**: Check [Google Cloud docs](https://cloud.google.com/apis/docs) 