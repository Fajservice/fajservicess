import { useState, useEffect, useMemo } from 'react';

const CDN_BASE = 'https://imagedelivery.net/7jVKF8FS0aEmjeSSRZqLyA';

const WORKER_URL = 'https://ancient-resonance-7565cf-images-api.maliktayyebh.workers.dev/';

// Password for page access
const PAGE_PASSWORD = 'faj2024';

export default function CloudflareGallery() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  useEffect(() => {
    const auth = sessionStorage.getItem('cf_gallery_auth');
    if (auth === 'true') setIsAuthenticated(true);
  }, []);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === PAGE_PASSWORD) {
      setIsAuthenticated(true);
      sessionStorage.setItem('cf_gallery_auth', 'true');
      setPasswordError('');
    } else {
      setPasswordError('Incorrect password!');
    }
  };

  // Fetch from Cloudflare Worker
  useEffect(() => {
    if (!isAuthenticated) return;

    const fetchImages = async () => {
      setLoading(true);
      setError('');

      try {
        const response = await fetch(WORKER_URL);
        const data = await response.json();

        if (data.success) {
          setImages(data.result.images || []);
        } else {
          setError('Failed to fetch: ' + (data.errors?.[0]?.message || 'Unknown error'));
        }
      } catch (err) {
        setError('Error: Check Worker URL is correct');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [isAuthenticated]);

  const filteredImages = useMemo(() => {
    if (!searchQuery.trim()) return images;
    const query = searchQuery.toLowerCase();
    return images.filter((img) =>
      img.id.toLowerCase().includes(query) ||
      img.filename?.toLowerCase().includes(query)
    );
  }, [images, searchQuery]);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  // Password Screen
  if (!isAuthenticated) {
    return (
      <div style={styles.passwordContainer}>
        <div style={styles.passwordBox}>
          <h1 style={styles.passwordTitle}>🔒 Protected Page</h1>
          <p style={styles.passwordSubtitle}>Enter password to access Cloudflare Images</p>
          <form onSubmit={handlePasswordSubmit}>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password..."
              style={styles.passwordInput}
              autoFocus
            />
            <button type="submit" style={styles.passwordBtn}>Unlock</button>
          </form>
          {passwordError && <p style={styles.errorText}>{passwordError}</p>}
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.title}>☁️ Cloudflare Images</h1>
        <p style={styles.subtitle}>
          Total: {images.length} | Showing: {filteredImages.length}
        </p>
      </header>

      <div style={styles.searchContainer}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="🔍 Search by Image ID..."
          style={styles.searchInput}
        />
        {searchQuery && (
          <button onClick={() => setSearchQuery('')} style={styles.clearBtn}>✕</button>
        )}
      </div>

      {loading && <div style={styles.loading}>⏳ Loading images...</div>}
      {error && <div style={styles.error}>{error}</div>}

      {!loading && !error && (
        <div style={styles.grid}>
          {filteredImages.map((img) => {
            const cdnUrl = `${CDN_BASE}/${img.id}/public`;
            return (
              <div key={img.id} style={styles.card}>
                <div style={styles.imageContainer}>
                  <img src={cdnUrl} alt={img.id} style={styles.image} loading="lazy" />
                </div>
                <div style={styles.cardInfo}>
                  <p style={styles.imageId}>
                    <strong>ID:</strong> {img.id}
                  </p>
                  <div style={styles.btnGroup}>
                    <button
                      onClick={() => copyToClipboard(img.id, `id-${img.id}`)}
                      style={styles.copyBtn}
                    >
                      {copiedId === `id-${img.id}` ? '✅' : '📋'} ID
                    </button>
                    <button
                      onClick={() => copyToClipboard(cdnUrl, `url-${img.id}`)}
                      style={styles.copyBtn}
                    >
                      {copiedId === `url-${img.id}` ? '✅' : '🔗'} URL
                    </button>
                  </div>
                  <input
                    type="text"
                    value={cdnUrl}
                    readOnly
                    style={styles.urlInput}
                    onClick={(e) => e.target.select()}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}

      {!loading && !error && filteredImages.length === 0 && (
        <div style={styles.noResults}>No images found for "{searchQuery}"</div>
      )}

      <button
        onClick={() => {
          sessionStorage.removeItem('cf_gallery_auth');
          setIsAuthenticated(false);
        }}
        style={styles.logoutBtn}
      >
        🔓 Logout
      </button>
    </div>
  );
}

const styles = {
  passwordContainer: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
    padding: '20px',
  },
  passwordBox: {
    background: '#fff',
    padding: '40px',
    borderRadius: '16px',
    textAlign: 'center',
    maxWidth: '400px',
    width: '100%',
    boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
  },
  passwordTitle: { fontSize: '28px', marginBottom: '10px', color: '#1a1a2e' },
  passwordSubtitle: { color: '#666', marginBottom: '30px' },
  passwordInput: {
    width: '100%',
    padding: '15px',
    fontSize: '16px',
    border: '2px solid #e0e0e0',
    borderRadius: '8px',
    marginBottom: '15px',
    boxSizing: 'border-box',
  },
  passwordBtn: {
    width: '100%',
    padding: '15px',
    fontSize: '16px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
  },
  errorText: { color: '#e74c3c', marginTop: '15px', fontWeight: 'bold' },
  container: { minHeight: '100vh', background: '#f5f7fa', padding: '20px' },
  header: { textAlign: 'center', marginBottom: '30px' },
  title: { fontSize: '32px', color: '#1a1a2e', marginBottom: '10px' },
  subtitle: { color: '#666' },
  searchContainer: { maxWidth: '600px', margin: '0 auto 30px', position: 'relative' },
  searchInput: {
    width: '100%',
    padding: '15px 50px 15px 20px',
    fontSize: '16px',
    border: '2px solid #e0e0e0',
    borderRadius: '50px',
    boxSizing: 'border-box',
  },
  clearBtn: {
    position: 'absolute',
    right: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '30px',
    height: '30px',
    cursor: 'pointer',
  },
  loading: { textAlign: 'center', padding: '50px', color: '#666', fontSize: '18px' },
  error: {
    textAlign: 'center',
    padding: '20px',
    background: '#ffe6e6',
    color: '#e74c3c',
    borderRadius: '8px',
    maxWidth: '600px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '20px',
    maxWidth: '1400px',
    margin: '0 auto',
  },
  card: {
    background: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
  },
  imageContainer: { height: '180px', overflow: 'hidden', background: '#f0f0f0' },
  image: { width: '100%', height: '100%', objectFit: 'cover' },
  cardInfo: { padding: '15px' },
  imageId: {
    fontSize: '12px',
    color: '#333',
    marginBottom: '10px',
    wordBreak: 'break-all',
    background: '#f5f5f5',
    padding: '8px',
    borderRadius: '4px',
  },
  btnGroup: { display: 'flex', gap: '8px', marginBottom: '10px' },
  copyBtn: {
    flex: 1,
    padding: '10px',
    fontSize: '13px',
    background: '#667eea',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  urlInput: {
    width: '100%',
    padding: '10px',
    fontSize: '11px',
    border: '1px solid #ddd',
    borderRadius: '4px',
    background: '#f9f9f9',
    boxSizing: 'border-box',
  },
  noResults: { textAlign: 'center', padding: '50px', color: '#666' },
  logoutBtn: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '12px 20px',
    background: '#e74c3c',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};
