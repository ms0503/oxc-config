{ inputs, ... }:
{
  imports = [
    (inputs.git-hooks.flakeModule or { })
  ];
  perSystem =
    { config, lib, ... }:
    lib.optionalAttrs (inputs.git-hooks ? flakeModule) {
      pre-commit = {
        check.enable = true;
        settings = {
          hooks = {
            actionlint.enable = false; # treefmt
            check-json.enable = true;
            editorconfig-checker = {
              enable = true;
              excludes = [
                ".idea"
                "flake.lock"
                "pnpm-lock.yaml"
              ];
            };
            markdownlint = {
              enable = true;
              settings.configuration = {
                MD013 = false;
                MD024 = false;
                MD026 = false;
                MD033 = false;
                MD040 = false;
              };
            };
            mdformat.enable = false; # treefmt
            nixfmt.enable = false; # treefmt
            treefmt = {
              enable = true;
              package = config.treefmt.build.wrapper;
            };
            yamlfmt.enable = false; # treefmt
            yamllint.enable = false; # treefmt
          };
          src = ../.;
        };
      };
    };
}
