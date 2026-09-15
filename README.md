# Persona & Personal Profile Website

เว็บแนะนำโปรไฟล์ส่วนตัว (Personal Profile & Portfolio) สไตล์ Dark Minimalist ถอดแบบและพัฒนาต่อยอดจาก reference (`riskymh.dev`)
รองรับทั้งหน้าจอ Mobile, Tablet, และ Desktop อย่างสมบูรณ์แบบ

---

## 🚀 เริ่มต้นใช้งาน (Getting Started)

1. ติดตั้ง Dependencies:
   ```bash
   npm install
   ```

2. รัน Local Development Server:
   ```bash
   npm run dev
   ```
   จากนั้นเปิดเบราว์เซอร์ไปที่ `http://localhost:5173`

3. Build สำหรับ Production:
   ```bash
   npm run build
   ```

---

## 🎨 วิธีปรับแต่งข้อมูลส่วนตัว (How to Customize)

คุณสามารถแก้ไขข้อมูลทั้งหมดได้จากไฟล์เดียวที่:
📁 **`src/data/profileData.js`**

- **ชื่อและ Bio**: แก้ไข `name`, `tagline`, `bio`, `status`
- **ปุ่มด่วนด้านหน้า (Quick Actions)**: แก้ไขหรือเพิ่มใน `quickActions`
- **เมนู Dropdown โซเชียลทั้งหมด (...)**: แก้ไขใน `socialLinks` (รองรับไอคอนจาก Lucide Icons)
- **รายการโปรเจกต์ (Projects)**: แก้ไขหรือเพิ่มใน `projects` พร้อมแท็ก Tech stack, ลิงก์ GitHub, และ Demo
- **ทักษะและความสามารถ (Skills)**: แก้ไขในหมวดหมู่ `skills`

### เปลี่ยนรูปภาพ Avatar
- วางรูปของคุณในโฟลเดอร์ `public/` (เช่น `public/my-avatar.png` หรือใช้ SVG)
- กำหนด path ใน `src/data/profileData.js` ตรง `avatar: "/my-avatar.png"`

---

## ☁️ การ Deploy ขึ้น Vercel (Deployment)

1. อัปโหลดโค้ดโปรเจกต์นี้ขึ้น GitHub Repo ของคุณ (เช่น `https://github.com/wosangxr/persona-profile`)
2. เข้าสู่ [Vercel](https://vercel.com) แล้วกด **Add New... > Project**
3. เลือก Repository ที่เพิ่งอัปโหลด
4. Vercel จะตรวจจับการตั้งค่า Vite ให้อัตโนมัติ กด **Deploy** ได้ทันที!
