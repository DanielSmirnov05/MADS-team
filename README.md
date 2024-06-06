
# MADS Project Setup Guide

# LFC MADS projekta iestatīšanas rokasgrāmata

Šī rokasgrāmata palīdzēs jums iestatīt MADS projektu, tostarp instalēt Composer, konfigurēt vides failu, migrēt un iesēt datubāzi, ģenerēt lietojumprogrammas atslēgu, pārvaldīt krātuvi un palaist izstrādes serveri.

# Izstrādei izmantotie rīki

- HTML
- CSS
- Java Script
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

## 5 Test cases
| **Test Case ID** | **Controller** | **Method** | **Test Description** | **Expected Outcome** | **Result** |
|------------------|------------------|-----------------------|------------------------------------------------------------------|------------------------------------------------------------------|------------|
| T1 | AlbumController | index | Verify that the index method retrieves the newest and best-selling albums | The method should return the correct view with newest and best-selling albums | Passed |
| T2 | ImageController | images | Verify that the players method retrieves the authenticated user's orders | The method should return the correct view with the user's orders | Passed |
| T3 | UserController | players | Verify that a new user can be successfully registered | The user should be added to the database, logged in, and redirected to the homepage | Passed |
| T4 | AlbumController | sort | Verify that the sort method sorts albums by title in ascending order | The method should return the albums sorted by title in ascending order | Passed |
| T5 | GoalsController| goals scorers | Verify that a comment can be successfully added to an album | The comment should be added to the database, and the view should show the comment | Passed |
