
#import <UIKit/UIKit.h>
#import <QuartzCore/QuartzCore.h>
#import <React/RCTView.h>

/**
 * Declare the ObjC interface for that old arch component class.
 *
 * If it needs to be enhanced `<View />`, it will extend `RCTView`, otherwise it can extend any UIView-based class.
 */
@interface ConicGradientView : RCTView

@property(nonatomic, readonly, strong) CAGradientLayer * _Nonnull layer;

@property (nonatomic, copy) NSArray<UIColor *> * _Nonnull colors;
@property (nonatomic, copy) NSArray<NSNumber *> * _Nonnull locations;
@property (nonatomic, assign) CGPoint centerPoint;

@end
