AFRAME.registerComponent("bullets", {
    init: function() {
        this.shootBullets()
    },
    
    shootBullets: function() {
        window.addEventListener("keydown", (i)=>{
            if (i.key === 'z') {
                var bullet = document.createElement("a-entity")
                bullet.setAttribute("geometry", {primitive: "sphere", radius: 0.1})
                bullet.setAttribute("material", {color: "red"})
                var cam = document.querySelector("#camera")
                pos = cam.getAttribute("position")
                bullet.setAttribute("position", {x: pos.x, y: pos.y, z: pos.z})
                var camera = cam.object3D
                var dir = new THREE.Vector3()
                camera.getWorldDirection(dir)
                bullet.setAttribute("velocity", dir.multiplyScalar(-10))
                var scene = document.querySelector("#scene")
                scene.appendChild(bullet)



            }
        })
    }

})