<template>
  <div class="Navbar">
    <nav class="navbar navbar-expand-lg navbar-theme fixed-top">
        <div class="container">
            <a class="navbar-brand" href="#"><img src="/assets/img/logo.png" width="80%" class="d-inline-block align-top" alt=""></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button> 
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav mx-auto pr-2">
                    <a class="nav-item nav-link active" href="#">Home</a>
                    <a class="nav-item nav-link" href="#">Features</a>
                    <a class="nav-item nav-link" href="#">Stories</a>
                    <a class="nav-item nav-link" href="#">Partner</a>
                    <a class="nav-item nav-link" href="#">About</a>
                </div>
                <a class="btn btn-cta" href="#">My Account</a>
            </div>
        </div>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'Navbar'
}
</script>
