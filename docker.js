//! create docker
// docker run --name nama_docker -d -p 3000:80 -p 8080:80 nginx:latest

//! list
// docker ps atau docker ls //* melihat list docker
// docker ps -a //* melihat list docker yang running
// docker ps -q //* melihat dengan ID saja
// docker ps -aq //* melihat dengan ID dan yang aktif

//! start and stop
// docker start||stop id

//! delete
// docker rm $(docker ps -aq) //* ps -aq melihat docker yang aktif dan berdasar ID

//! volume
// /some/content:/usr/share/nginx/html //* yang kiri host, yang kanan docker
// ro //* read only
// $ docker run --name websiteku -p 8080:80 nginx:latest -v /some/content:/usr/share/nginx/html:ro -d nginx
// $ docker run --name websiteku -p 8080:80 nginx:latest -v $(pwd):/usr/share/nginx/html:ro -d nginx
// $ docker run --name websiteku -v $(dir):/usr/share/nginx/html -d -p 8080:80 nginx di windows
// /usr/share/nginx/html:ro => ini tempatnya di dalam docker
//* kalau mau ke dalam direktori container : docker exec -it websiteku bash
// keluar pakai exit

// kopi dari container lain : docker run --name websiteku-copy --volumes-from websiteku -d -p 8081:80 nginx