# YGATES Stratejik Yönetim ve Danışmanlık

Kurumsal tanıtım sitesi. Saf HTML/CSS, derleme adımı yok; GitHub Pages ile yayınlanır.

- `index.html` — ana sayfa
- `kvkk.html` — KVKK aydınlatma metni
- `assets/` — stil, logo (SVG), fotoğraf, gömülü yazı tipleri (`fonts/`, OFL 1.1)

## Yerelde önizleme

```bash
python3 -m http.server 8811
```

## Yayınlama

Depo adı `KULLANICIADI.github.io` → site `https://KULLANICIADI.github.io` adresinde açılır.
GitHub'da depo → **Settings → Pages → Source: Deploy from a branch → `main` / root**.

Site dışarıya istek yapmaz (yazı tipleri dahil); KVKK metnindeki "takip yok" ifadesi buna dayanır.
