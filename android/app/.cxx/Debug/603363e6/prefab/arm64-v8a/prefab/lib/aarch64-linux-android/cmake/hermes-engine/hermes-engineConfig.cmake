if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/felixlambert/.gradle/caches/transforms-3/bb7857e31fecbc111c10811a43617a5a/transformed/jetified-hermes-android-0.73.2-debug/prefab/modules/libhermes/libs/android.arm64-v8a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/felixlambert/.gradle/caches/transforms-3/bb7857e31fecbc111c10811a43617a5a/transformed/jetified-hermes-android-0.73.2-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

