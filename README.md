
# MADS Project Setup Guide

# LFC MADS projekta iestatīšanas rokasgrāmata

Šī rokasgrāmata palīdzēs jums iestatīt MADS projektu, tostarp instalēt Composer, konfigurēt vides failu, migrēt un iesēt datubāzi, ģenerēt lietojumprogrammas atslēgu, pārvaldīt krātuvi un palaist izstrādes serveri.

# Izstrādei izmantotie rīki

- HTML
- CSS (ar Tailwind Css)
- Laravels
- VsCode
- Laragons

## Priekšnoteikumi
- Players
- MySQL vai cita datu bāze, ko atbalsta Laravel

## 1. darbība. Instalējiet programmu Composer

Lai projektā instalētu komponista atkarības, projekta direktorijā palaidiet šādu komandu:
```
komponista instalēšana
```
## 2. darbība. Izveidojiet .env failu

.env failā ir ietverta videi specifiska konfigurācija, piemēram, datu bāzes savienojuma informācija. Kopējiet failu .env.example, lai izveidotu jaunu .env failu:
```
cp .env.example .env
```
Pēc tam rediģējiet .env failu, lai konfigurētu datu bāzes savienojumu:

- DB_CONNECTION=mysql
- DB_HOST=127.0.0.1
- DB_PORT=3306
- DB_DATABASE=jūsu_datubāzes_nosaukums
- DB_USERNAME=jūsu_datubāzes_lietotājs
- DB_PASSWORD=jūsu_datubāzes_parole

## 3. darbība. Migrējiet un izveidojiet datu bāzi

Lai palaistu datu bāzes migrāciju un ievadītu datu bāzi ar testa datiem, izmantojiet šo Artisan komandu:
```
Šī komanda atiestatīs datu bāzi un veiks visas migrācijas, pēc tam pievienos tai testa datus.

## 4. darbība: ģenerējiet lietojumprogrammas atslēgu

Laravel nepieciešama lietojumprogrammas atslēga, kas tiek izmantota šifrēšanai. Ģenerējiet lietojumprogrammas atslēgu, izpildot:
```
php artisan atslēga: ģenerēt
```
Šī komanda atjauninās APP_KEY vērtību jūsu .env failā.

## 5. darbība. Pārvietojiet mapi album_covers

Pārvietojiet mapi album_covers uz krātuves/lietotnes/publisko direktoriju. Varat izmantot šādu komandu:
```
mv path/to/album_covers storage/app/public/
```
Noteikti aizstājiet ceļu/to/album_covers ar faktisko ceļu uz mapi album_covers.

## 6. darbība. Saistiet krātuvi ar publisko mapi

Lai izveidotu simbolisku saiti no krātuves/lietotnes/publisku uz publisko/krātuvi, palaidiet šo Artisan komandu:
```
Šī komanda ļauj piekļūt failiem krātuvē/lietotnē/publiskajā no publiskā direktorija.

## 7. darbība: palaidiet izstrādes serveri

Lai palaistu Laravel izstrādes serveri, palaidiet šādu komandu:
```
php artisan kalpo
```
Šī komanda sāks vietējās izstrādes serveri vietnē http://127.0.0.1:8000.

## 5 Testa gadījumi
| **Pārbaudes gadījuma ID** | ** Kontrolieris** | **Metode** | **Pārbaudes apraksts** | **Paredzamais rezultāts** | **Rezultāts** |
|------------------|------------------|------------ ------------|-------------------------------------- -----------------------------|--------------------- -----------------------------------------------|--- ---------|
| TC01 | AlbumController | indekss | Pārbaudiet, vai indeksa metode izgūst jaunākos un vislabāk pārdotos albumus | Metodei ir jāatgriež pareizais skats ar jaunākajiem un vislabāk pārdotajiem albumiem | Nokārtots |
| TC02 | AlbumController | šķirot | Pārbaudiet, vai kārtošanas metode kārto albumus pēc nosaukuma augošā secībā | Metodei ir jāatgriež albumi, kas sakārtoti pēc nosaukuma augošā secībā | Nokārtots |
| TC03 | CommentController| veikalsKomentārs | Pārbaudiet, vai komentāru var veiksmīgi pievienot albumam | Komentārs jāpievieno datu bāzei, un skatā jāparāda komentārs | Nokārtots |
| TC04 | OrderController | parādītBibliotēka | Pārbaudiet, vai metode showLibrary izgūst autentificētā lietotāja pasūtījumus | Metodei ir jāatgriež pareizais skats ar lietotāja pasūtījumiem | Nokārtots |
| TC05 | UserController | veikals | Pārbaudiet, vai jaunu lietotāju var veiksmīgi reģistrēt | Lietotājs jāpievieno datu bāzei, jāpiesakās un jānovirza uz sākumlapu | Nokārtots |
